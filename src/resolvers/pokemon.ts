function pokemon(_parent: any, args: any, context: any) {
  const { id } = args;
  const { dataSources } = context;

  return dataSources.pokeApi.getPokemon(id);
}

export default pokemon;
