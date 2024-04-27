import Image from "next/image";

import { CharacterProps } from "../types";
import { fetchCharacters } from "../../utils/index";

interface CharacterCardProps {
  character: CharacterProps;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  console.log(character);
  const { name, status, species, location, image } = character;
  return (
    <div className="bg-white rounded-lg">
      <img src={image} alt="character image" width={200} height={200} className="rounded-lg" />
      <div className="p-6">
        <h4>{name}</h4>
        <div>
          <p>{status} - {species}</p>
          <p>Location: {location.name}</p>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard
