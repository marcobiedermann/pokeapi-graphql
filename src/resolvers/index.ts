import abilities from "./abilities";
import ability from "./ability";
import pokemon from "./pokemon";
import pokemons from "./pokemons";

const resolvers = {
  Query: {
    ability,
    abilities,
    pokemons,
    pokemon,
  },
};

export default resolvers;
