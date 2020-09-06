function pokemons(_parent: any, args: any, context: any) {
  const { dataSources } = context;
  const { limit, offset } = args;

  return dataSources.pokeApi.getPokemons({
    limit,
    offset,
  });
}

export default pokemons;
