import PokeAPI from './poke-api';

function dataSources(): { pokeApi: PokeAPI } {
  return {
    pokeApi: new PokeAPI(),
  };
}

export default dataSources;
