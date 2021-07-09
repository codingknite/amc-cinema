import React, { useContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import favoritesReducer from '../reducers/favoriteReducer';

const FavoriteContext = React.createContext(null);

let initialFavorites;
try {
  initialFavorites = JSON.parse(localStorage.getItem('favorite')) ?? [];
} catch {
  initialFavorites = [];
  console.error('Favorites could not be parsed');
}

export function FavoritesProvider({ children }) {
  const [favorites, dispatchFavorites] = useReducer(
    favoritesReducer,
    initialFavorites,
  );

  useEffect(() => localStorage.setItem('favorite', JSON.stringify(favorites)), [
    favorites,
  ]);

  const contextValue = {
    favorites,
    dispatchFavorites,
  };

  return (
    <FavoriteContext.Provider value={contextValue}>
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorite() {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error(
      'useFavorite must be used within a FavoriteProvider. Wrap a parent component in <FavoriteProvider> to fix this error.',
    );
  }
  return context;
}

FavoritesProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
