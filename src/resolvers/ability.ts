import { DataSources } from '../data-sources';

interface Args {
  id: number;
}

interface Context {
  dataSources: DataSources;
}

function ability(_parent: any, args: Args, context: Context): Promise<any> {
  const { id } = args;
  const { dataSources } = context;

  return dataSources.pokeApi.getAbility(id);
}

export default ability;
