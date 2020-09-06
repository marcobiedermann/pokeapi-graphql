import { RESTDataSource } from "apollo-datasource-rest";

interface GetPokemonArgs {
  limit: number;
  offset: number;
}

class PokeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://pokeapi.co/api/v2/";
  }

  getPokemons(args: GetPokemonArgs) {
    const { limit, offset } = args;

    return this.get("pokemon", {
      limit,
      offset,
    });
  }

  getPokemon(id: string) {
    return this.get(`pokemon/${id}`);
  }
}

export default PokeAPI;
