import React from "react";
import { useOptimistic, useActionState } from "react";
import { updateNameInDb } from "./api";

export const UseOptimisticHook = () => {
  // useOptimistic hook immediately updates the UI so that the user sees everything is happening quickly
  // for example, when a user clicks the submit button after form submission then the form should immediately
  // update the UI, that is what the use optimistic hook does
  // Provides optimistic state that can update to the user immediately, and will be automatically reverted to the
  // previous UI if there's a problem with the server

  const [state, actionFunction, isPending] = useActionState(updateName, {
    name: "",
    error: null,
  });

  // const [optimisticState, setOptimisticState] = useOptimistic(the state which we wanna track)

  const [optimisticName, setOptimisticName] = useOptimistic(state.name);

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
      <p>Current user : {state.name}</p>
      {/* instead of this, we can write this */}
      <p>Current user : {optimisticName}</p>
      {/* {isPending && <p>Loading...</p>} */}
      {!isPending && state.error && <p>{state.error.message}</p>}
      <form action={actionFunction}>
        <label>Enter your name:</label>
        <input type="text" name="name" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
