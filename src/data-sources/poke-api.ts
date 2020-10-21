import { RESTDataSource } from 'apollo-datasource-rest';

interface Pagination {
  limit: number;
  offset: number;
}

class PokeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://pokeapi.co/api/v2/';
  }

  getAbilities(args: Pagination) {
    const { limit, offset } = args;

    return this.get('ability', {
      limit,
      offset,
    });
  }

  getAbility(id: string) {
    return this.get(`ability/${id}`);
  }

  getPokemons(args: Pagination) {
    const { limit, offset } = args;

    return this.get('pokemon', {
      limit,
      offset,
    });
  }

  getPokemon(id: string) {
    return this.get(`pokemon/${id}`);
  }
}

export default PokeAPI;
