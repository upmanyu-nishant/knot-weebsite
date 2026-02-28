import { useState, useEffect } from 'react';

const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const savedFavorites = localStorage.getItem('favoriteKnots');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const addFavorite = (knot: string) => {
    if (!favorites.includes(knot)) {
      const updatedFavorites = [...favorites, knot];
      setFavorites(updatedFavorites);
      localStorage.setItem('favoriteKnots', JSON.stringify(updatedFavorites));
    }
  };

  const removeFavorite = (knot: string) => {
    const updatedFavorites = favorites.filter(fav => fav !== knot);
    setFavorites(updatedFavorites);
    localStorage.setItem('favoriteKnots', JSON.stringify(updatedFavorites));
  };

  const clearFavorites = () => {
    setFavorites([]);
    localStorage.removeItem('favoriteKnots');
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    clearFavorites,
  };
};

export default useFavorites;