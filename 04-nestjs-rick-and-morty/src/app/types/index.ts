export interface Character {
  id: number;
  isFavorite: boolean;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  location: {
    name: string;
    url: string;
  };
  origin: {
    name: string;
    url: string;
  };
}

export interface CharacterProps {
  id: number | any;
  isFavorite: boolean | any;
  name: string | any;
  status: string | any;
  species: string | any;
  type: string | any;
  gender: string | any;
  image: string | any;
  location: {
    name: string | any;
    url: string | any;
  };
  origin: {
    name: string | any;
    url: string | any;
  };
}