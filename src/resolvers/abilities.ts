function abilities(_parent: any, args: any, context: any) {
  const { dataSources } = context;
  const { limit, offset } = args;

  return dataSources.pokeApi.getAbilities({
    limit,
    offset,
  });
}

export default abilities;
