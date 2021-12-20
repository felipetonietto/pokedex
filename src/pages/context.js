import React from "react";

const [PokemonProvider, usePokemon] = React.createContext({
  name: "PokemonContext",
});

export { PokemonProvider, usePokemon };
