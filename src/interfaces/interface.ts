export interface Characters {
  filter: any;
  map: any;
  id: number;
  name: string;
  status: string;
  type: string;
  species: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: Array<string>;
  url: string;
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: Array<string>;
  url: string;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Array<string>;
  url: string;
}

export interface State {
  allCharacters: Characters[];
  characters: Characters[];
  locations: Location[];
  episodes: Episode[];
  page: number;
}
