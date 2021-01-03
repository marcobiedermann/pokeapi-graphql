import { DataSources } from '../data-sources';
import NamedAPIResourceList from '../types/named-api-resource-list';

interface Args {
  limit: number;
  offset: number;
}

interface Context {
  dataSources: DataSources;
}

function pokemons(_parent: any, args: Args, context: Context): Promise<NamedAPIResourceList> {
  const { dataSources } = context;
  const { limit, offset } = args;

  return dataSources.pokeApi.getPokemons({
    limit,
    offset,
  });
}

export default pokemons;
