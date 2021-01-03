import { RESTDataSource } from 'apollo-datasource-rest';
import NamedAPIResourceList from '../types/named-api-resource-list';

interface Args {
  limit: number;
  offset: number;
}

class PokeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://pokeapi.co/api/v2/';
  }

  getAbilities(args: Args): Promise<NamedAPIResourceList> {
    const { limit, offset } = args;

    return this.get<NamedAPIResourceList>('ability', {
      limit,
      offset,
    });
  }

  getAbility(id: number): Promise<any> {
    return this.get(`ability/${id}`);
  }

  getPokemons(args: Args): Promise<NamedAPIResourceList> {
    const { limit, offset } = args;

    return this.get<NamedAPIResourceList>('pokemon', {
      limit,
      offset,
    });
  }

  getPokemon(id: number): Promise<any> {
    return this.get(`pokemon/${id}`);
  }
}

export default PokeAPI;
