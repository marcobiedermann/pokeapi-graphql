import { gql } from 'apollo-server';
import Ability from './ability';
import AbilityEffectChange from './ability-effect-change';
import AbilityFlavorText from './ability-favor-text';
import AbilityPokemon from './ability-pokemon';
import Effect from './effect';
import Name from './name';
import NamedAPIResource from './named-api-resource';
import NamedAPIResourceList from './named-api-resource-list';
import Pokemon from './pokemon';
import PokemonAbility from './pokemon-ability';
import PokemonHeldItem from './pokemon-held-item';
import PokemonHeldItemVersion from './pokemon-held-item-version';
import PokemonMove from './pokemon-move';
import PokemonMoveVersion from './pokemon-move-version';
import PokemonSprites from './pokemon-sprites';
import PokemonStat from './pokemon-stat';
import PokemonType from './pokemon-type';
import VerboseEffect from './verbose-effect';
import VersionGameIndex from './version-game-index';

const typeDefs = gql`
  type Query {
    abilities(limit: Int, offset: Int): NamedAPIResourceList
    ability(id: ID!): Ability
    pokemons(limit: Int, offset: Int): NamedAPIResourceList
    pokemon(id: ID!): Pokemon
  }

  ${Ability}
  ${AbilityEffectChange}
  ${AbilityFlavorText}
  ${AbilityPokemon}
  ${Effect}
  ${Name}
  ${NamedAPIResource}
  ${NamedAPIResourceList}
  ${Pokemon}
  ${PokemonAbility}
  ${PokemonHeldItem}
  ${PokemonHeldItemVersion}
  ${PokemonMove}
  ${PokemonMoveVersion}
  ${PokemonSprites}
  ${PokemonStat}
  ${PokemonType}
  ${VerboseEffect}
  ${VersionGameIndex}
`;

export default typeDefs;
