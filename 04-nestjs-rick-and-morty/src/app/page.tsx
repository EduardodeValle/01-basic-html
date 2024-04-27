"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

// import { fetchCharacters } from "../../utils/index";
import CharacterCard from "./components/CharacterCard";
import { Character } from "./types";
import NavBar from "./components/navbar";

export default function Home() {
  const [allCharacters, setCharacters] = useState<Character[]>([]);

  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character?page=1");
    const result = await response.json();
    setCharacters(result.results);
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <main className="overflow-hidden">
      <NavBar></NavBar>
      <div className="mt-12 px-4 py-2 max-w-screen-xl mx-auto" id="discover">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {allCharacters.map((character, index) => (
            <CharacterCard key={index} character={character} />
          ))}
        </div>
      </div>
    </main>
  );
}
