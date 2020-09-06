const Ability = `
  type Ability {
    effect_changes: [AbilityEffectChange]
    effect_entries: [VerboseEffect]
    flavor_text_entries: [AbilityFlavorText]
    generation: NamedAPIResource
    id: Int
    is_main_series: Boolean
    name: String
    names: [Name]
    pokemon: [AbilityPokemon]
  }
`;

export default Ability;
