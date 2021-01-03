import { DataSources } from '../data-sources';

interface Args {
  id: number;
}

interface Context {
  dataSources: DataSources;
}

function pokemon(_parent: any, args: Args, context: Context): Promise<any> {
  const { id } = args;
  const { dataSources } = context;

  return dataSources.pokeApi.getPokemon(id);
}

export default pokemon;
