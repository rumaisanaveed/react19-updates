import React from "react";
import { use } from "react";

export const UseApi = () => {
  // It's not actually a hook, thus doesn't have to obey the "rules of hooks"
  // (e.g. can be used conditionally)
  // Reads async resources and automatically suspends the component
  // Can replace the useContext hook

  // It'll cause a lot of re renders because every time the promise will return and the component will re-render again and again
  //   const fetchPromise = fetch("https://pokeapi.co/api/v2/pokemon/ditto").then(
  //     (res) => res.json()
  //   );
  //   const pokemon = use(fetchPromise);
  return (
    <pre>
      <code>{JSON.stringify(pokemon, null, 1)}</code>
    </pre>
    // This repo contains my learnings of the React 19 features.
  );
};
