import React from "react";
import { useOptimistic } from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { updateNameInDb } from "./api";

export const UseFormStatusHook = () => {
  const [state, actionFunction, isPending] = useActionState(updateName, {
    name: "",
    error: null,
  });

  const [optimisticName, setOptimisticName] = useOptimistic(state.name);

  // useFormStatus acts as a context consumer for the nearest parent <form> element
  // and provides you information about the current status of that form

  async function updateName(prevState, formData) {
    setOptimisticName(formData.get("name"));
    try {
      const newName = await updateNameInDb(formData.get("name"));
      return { name: newName, error: null };
    } catch (error) {
      console.error(error);
      return { ...prevState, error: error.message || "Some error occured!" };
    }
  }
  return (
    <>
      <p>Current user : {optimisticName}</p>
      {!isPending && state.error && <p>{state.error.message}</p>}
      <form action={actionFunction}>
        <label>Enter your name:</label>
        <input type="text" name="name" placeholder="Enter your name" />
        {/* instead of passing the isPending prop from this component to the MyButton, we can make use
        of the useFormStatus hook */}
        <MyButton type="submit">Update</MyButton>
      </form>
    </>
  );
};

const MyButton = ({ children, ...rest }) => {
  const { pending } = useFormStatus();
  return <button {...rest}>{pending ? "Submitting" : children}</button>;
};
