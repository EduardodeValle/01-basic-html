"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Character } from "../../types";
import NavBar from "../../components/navbar";
import ToggleHeart from "../../components/ToggleHeart";

const CharacterDetails = () => {
  const params = useSearchParams();
  const id = params.get("id");

  const [characterInfo, setCharacterInfo] = useState({
    id: 0,
    isFavorite: false,
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    image: "",
    location: {
      name: "",
      url: "",
    },
    origin: {
      name: "",
      url: "",
    },
  });

  useEffect(() => {
    if (id) {
      const fetchCharacterInfo = async () => {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`,
        );
        const result = await response.json();
        setCharacterInfo(result);
      };
      fetchCharacterInfo();
    }
  }, [id]);

  return (
    <div>
      <NavBar></NavBar>
      <div className="bg-white">
        <img
          src={characterInfo.image}
          alt="character image"
          width={300}
          height={300}
          className="rounded-xl object-cover"
        />
        <div className="p-2">
          <h4 className="text-lg font-semibold truncate">
            {characterInfo.name}{" "}
            <ToggleHeart
              id={characterInfo.id}
              initialIsFavorite={characterInfo.isFavorite}
            />
          </h4>
          <div>
            <p className="text-sm text-gray-600 truncate">
              Type: {characterInfo.type}
            </p>
            <p className="text-sm text-gray-600 truncate">
              Gender: {characterInfo.gender}
            </p>
            <p className="text-sm text-gray-600 truncate">
              {characterInfo.status} - {characterInfo.species}
            </p>
            <p className="text-sm text-gray-600 break-words">
              Location: {characterInfo.location.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
