export interface Character {
  name: string;
  status: string;
  species: string;
  image: string;
  location: {
    name: string;
    url: string;
  };
}

export interface CharacterProps {
  name: string | any;
  status: string | any;
  species: string | any;
  image: string | any;
  location: {
    name: string | any;
    url: string | any;
  };
}