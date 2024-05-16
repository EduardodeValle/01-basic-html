"use client";
import { useEffect, useState } from "react";

import CharacterCard from "../../components/CharacterCard";
import { Character } from "../../types";
import NavBar from "../../components/navbar";

export default function Home() {
  const [favoriteCharacters, setFavoriteCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchFavoriteCharacters = async () => {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "{}");

      // Gather all character IDs from favorites
      const characterIds = Object.keys(favorites).map((key) =>
        parseInt(key, 10),
      );

      // Fetch all characters based on these IDs
      const fetchedCharacters = await Promise.all(
        characterIds.map(async (id) => {
          const response = await fetch(
            `https://rickandmortyapi.com/api/character/${id}`,
          );
          const data = await response.json();
          return {
            ...data,
            isFavorite: true, // Ensure the fetched characters are marked as favorites
          };
        }),
      );

      setFavoriteCharacters(fetchedCharacters);
    };

    fetchFavoriteCharacters();
  }, []);

  return (
    <main className="overflow-hidden">
      <NavBar></NavBar>
      <div className="mt-12 px-4 py-2 max-w-screen-xl mx-auto" id="discover">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {favoriteCharacters.map((character, index) => (
            <CharacterCard key={index} character={character} />
          ))}
        </div>
      </div>
    </main>
  );
}
