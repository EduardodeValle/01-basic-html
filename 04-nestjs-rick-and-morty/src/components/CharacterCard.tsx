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
    <div className="bg-white rounded-lg overflow-hidden">
      <img src={image} alt="character image" width={300} height={300} className="rounded-xl object-cover" />
      <div className="max-w-sm p-2">
        <h4 className="text-lg font-semibold truncate">{name}</h4> {/* Ensures long names are truncated gracefully */}
        <div>
          <p className="text-sm text-gray-600 truncate">{status} - {species}</p> {/* Truncate ensures text fits on one line */}
          <p className="text-sm text-gray-600 break-words">Location: {location.name}</p> {/* Truncate ensures text fits on one line */}
        </div>
      </div>
    </div>
  )
}

export default CharacterCard
