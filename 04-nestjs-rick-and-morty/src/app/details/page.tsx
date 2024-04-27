"use client";
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';

import { Character } from '../types';

const CharacterDetails = () => {

  const params = useSearchParams();
  const id = params.get("id");

  const [characterInfo, setCharacterInfo] = useState({
    id: 0,
    name: "",
    status: "",
    species: "",
    image: "",
    location: {
      name: "",
      url: ""
    }
  });

  // const [characterInfo, setCharacterInfo] = useState(null);

  /*
  const fetchCharacterInfo = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const result = await response.json();
    setCharacterInfo(result.results);
    // console.log(result.results.slice(0, 3));
  }
  */

  useEffect(() => {
    if (id) {
      const fetchCharacterInfo = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const result = await response.json();
        setCharacterInfo(result);
      };
      fetchCharacterInfo();
    }
  }, [id]);

  return (
    <div className="bg-white">
      <img src={characterInfo.image} alt="character image" width={300} height={300} className="rounded-xl object-cover" />
      <div className="p-2">
        <h4 className="text-lg font-semibold truncate">{characterInfo.name}</h4>
        <div>
          <p className="text-sm text-gray-600 truncate">{characterInfo.status} - {characterInfo.species}</p>
          <p className="text-sm text-gray-600 break-words">Location: {characterInfo.location.name}</p>
        </div>
      </div>
    </div>
  )
}

export default CharacterDetails
