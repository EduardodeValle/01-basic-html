"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

interface ToggleHeartProps {
  id: number;
  initialIsFavorite: boolean;
}

const ToggleHeart = ({ id, initialIsFavorite }: ToggleHeartProps) => {
  const [isFilled, setIsFilled] = useState(initialIsFavorite);

  // Check if localStorage is available and retrieve the initial favorite status
  useEffect(() => {
    if (typeof window !== "undefined") {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "{}");
      setIsFilled(!!favorites[id]); // This should re-check whenever `id` or `favorites` changes
    }
  }, [id]);

  // Update localStorage when the favorite status changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      // This checks if the code is running on the client
      const favoritesJson = localStorage.getItem("favorites");
      const favorites = JSON.parse(favoritesJson || "{}");

      // Create a new object based on the existing favorites
      let updatedFavorites = { ...favorites };

      if (isFilled) {
        updatedFavorites[id] = true;
      } else {
        // Use destructuring to omit the property with the dynamic key (id)
        const { [id]: omitted, ...remainingFavorites } = updatedFavorites;
        updatedFavorites = remainingFavorites;
      }

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  }, [isFilled, id]);

  const toggleHeart = () => {
    setIsFilled(!isFilled);
  };

  return (
    <FontAwesomeIcon
      icon={isFilled ? solidHeart : regularHeart}
      onClick={toggleHeart}
      style={{ cursor: "pointer" }}
    />
  );
};

export default ToggleHeart;
