import NamedAPIResource from './named-api-resource';

interface NamedAPIResourceList {
  count: number;
  next: string | null;
  previous: string | null;
  results: NamedAPIResource[];
}

export default NamedAPIResourceList;
