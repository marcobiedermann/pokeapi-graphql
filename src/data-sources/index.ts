import PokeAPI from './poke-api';

function dataSources(): { pokeApi: PokeAPI } {
  return {
    pokeApi: new PokeAPI(),
  };
}

export type DataSources = ReturnType<typeof dataSources>;

export default dataSources;
