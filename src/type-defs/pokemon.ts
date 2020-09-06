const Pokemon = `
  type Pokemon {
    abilities: [PokemonAbility]
    base_experience: Int
    forms: [NamedAPIResource]
    game_indices: [VersionGameIndex]
    height: Int
    held_items: [PokemonHeldItem]
    id: String
    is_default: Boolean
    location_area_encounters: String
    moves: [PokemonMove]
    name: String!
    order: Int
    species: NamedAPIResource
    sprites: PokemonSprites
    stats: PokemonStat
    types: PokemonType
    weight: Int
  }
`;

export default Pokemon;
