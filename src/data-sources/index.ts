import PokeAPI from "./poke-api";

function dataSources() {
  return {
    pokeApi: new PokeAPI(),
  };
}

export default dataSources;
