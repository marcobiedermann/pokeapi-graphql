function ability(_parent: any, args: any, context: any) {
  const { id } = args;
  const { dataSources } = context;

  return dataSources.pokeApi.getAbility(id);
}

export default ability;
