const NamedAPIResourceList = `
  type NamedAPIResourceList {
    count: Int!
    next: String
    previous: String
    results: [NamedAPIResource]
  }
`;

export default NamedAPIResourceList;
