import React, { useState } from "react";
import { useActionState } from "react";
import { updateNameInDb } from "./api";

export const FormActions = () => {
  // before
  //   const [name, setName] = useState("");

  //   //   traditional way of handling the loading and error states
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(null);

  //   const handleChange = (event) => {
  //     setName(event.target.value);
  //   };

  //   // previous way of doing it
  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     setLoading(true);
  //     setError(null);
  //     try {
  //       const response = await fetch("https://api.example.com", {
  //         method: "GET",
  //       });
  //       console.log(response);
  //     } catch (error) {
  //       console.error(error);
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  // after

  // useActionState -> new hook to handle error and loading states

  // const [state, actionFunction, isPending] = useActionState(fn which will be called for form submission, initial state)

  // we just have only one state named name so we can name the state as name
  // const [name, actionFunction, isPending] = useActionState(formAction, "");

  // how to store state as object
  const [state, actionFunction, isPending] = useActionState(updateName, {
    name: "",
    error: null,
  });

  async function updateName(prevState, formData) {
    try {
      const newName = await updateNameInDb(formData.get("name"));
      return { name: newName, error: null };
    } catch (error) {
      console.error(error);
      return { ...prevState, error: error.message || "Some error occured!" };
    }
  }

  // don't need to use prevent default and default here in the function
  // function formAction(prevState, formData) {
  //   console.log(formData.get("name"));
  //   // try {
  //   //   //   const response = await fetch("https://api.example.com", {
  //   //   //     method: "GET",
  //   //   //   });
  //   //   // imagine we're getting a newName here from the api, we can use it like this
  //   //   // so the state will get updated and the component will re-render to reflect the state
  //   //   // changes made to name
  //   //   return prevState;
  //   //   //   console.log(response);
  //   // } catch (error) {
  //   //   console.error(error);
  //   // }
  // }

  return (
    <>
      {/* before */}
      {/* <form onSubmit={handleSubmit}>
        <label>Enter your name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form> */}
      {/* after */}
      <p>Current user : {state.name}</p>
      {isPending && <p>Loading...</p>}
      {!isPending && state.error && <p>{state.error}</p>}
      <form action={actionFunction}>
        <label>Enter your name:</label>
        <input type="text" name="name" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
