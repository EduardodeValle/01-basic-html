import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

const ToggleHeart = () => {
  const [isFilled, setIsFilled] = useState(false);

  const toggleHeart = () => {
    setIsFilled(!isFilled);
  };

  return (
    <FontAwesomeIcon icon={isFilled ? solidHeart : regularHeart} onClick={toggleHeart} style={{ cursor: 'pointer' }} />
  );
};

export default ToggleHeart;
