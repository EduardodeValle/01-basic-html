"use client";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

interface ToggleHeartProps {
  id: number;
  initialIsFavorite: boolean;
}

const ToggleHeart = ({ id, initialIsFavorite }: ToggleHeartProps) => {

  const [isFilled, setIsFilled] = useState(initialIsFavorite);

  // Check if localStorage is available and retrieve the initial favorite status
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
      setIsFilled(!!favorites[id]); // This should re-check whenever `id` or `favorites` changes
    }
  }, [id]);

  // Update localStorage when the favorite status changes
  useEffect(() => {
    if (typeof window !== 'undefined') { // This checks if the code is running on the client
      console.log(localStorage.getItem('favorites'));
      const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
      if (isFilled) {
        favorites[id] = true;
      } else {
        delete favorites[id];
      }
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }, [isFilled, id]);

  const toggleHeart = () => {
    setIsFilled(!isFilled);
  };

  return (
    <FontAwesomeIcon icon={isFilled ? solidHeart : regularHeart} onClick={toggleHeart} style={{ cursor: 'pointer' }} />
  );
};

export default ToggleHeart;
