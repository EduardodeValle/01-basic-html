import Image from "next/image";

import { fetchCharacters } from "../../utils/index";

import CharacterCard from "../components/CharacterCard";

export default async function Home() {
  const allCharacters = await fetchCharacters();
  const isDataEmpty = !Array.isArray(allCharacters) || allCharacters.length < 1 || !allCharacters;
  return (
    <main className="overflow-hidden">
      <div className='mt-12 padding-x padding-y max-width' id='discover'>



      </div>
    </main>
  );
}
