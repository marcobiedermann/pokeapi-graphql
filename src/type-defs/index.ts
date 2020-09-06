import { gql } from "apollo-server";
import NamedAPIResource from "./named-api-resource";
import NamedAPIResourceList from "./named-api-resource-list";
import Pokemon from "./pokemon";
import PokemonAbility from "./pokemon-ability";
import PokemonHeldItem from "./pokemon-held-item";
import PokemonHeldItemVersion from "./pokemon-held-item-version";
import PokemonMove from "./pokemon-move";
import PokemonMoveVersion from "./pokemon-move-version";
import PokemonSprites from "./pokemon-sprites";
import PokemonStat from "./pokemon-stat";
import PokemonType from "./pokemon-type";
import VersionGameIndex from "./version-game-index";

const typeDefs = gql`
  type Query {
    pokemons(limit: Int, offset: Int): NamedAPIResourceList
    pokemon(id: ID!): Pokemon
  }

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
  ${VersionGameIndex}
`;

export default typeDefs;
