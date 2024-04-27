"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

// import { fetchCharacters } from "../../utils/index";
import CharacterCard from "../components/CharacterCard";
import { Character } from "../types";


export default function Home() {
  const [allCharacters, setCharacters] = useState<Character[]>([]);
  // const allCharacters = await fetchCharacters();

  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character?page=1");
    const result = await response.json();
    setCharacters(result.results);
    // console.log(result.results.slice(0, 3));
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <main className="overflow-hidden">
      <div className='mt-12 padding-x padding-y max-width' id='discover'>

        {allCharacters.map((character, index) => (
          <CharacterCard key={index} character={character} /> // Fix: Pass the character prop correctly
        ))}

      </div>
    </main>
  );
}
