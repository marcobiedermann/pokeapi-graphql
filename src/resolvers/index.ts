import pokemon from "./pokemon";
import pokemons from "./pokemons";

const resolvers = {
  Query: {
    pokemons,
    pokemon,
  },
};

export default resolvers;
