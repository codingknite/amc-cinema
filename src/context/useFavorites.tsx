import React, { createContext, useContext, useEffect, useReducer } from 'react';
import favoritesReducer from '../reducers/favoriteReducer';

interface ContextValues {
  favorites: number[];
  dispatchFavorites: React.Dispatch<Action>;
}

interface Action {
  type: string;
  payload: number;
}

const FavoriteContext = createContext<ContextValues | undefined>(undefined);

let initialFavorites: number[];
try {
  initialFavorites =
    JSON.parse(localStorage.getItem('favorite') || '{}') ?? [];
} catch {
  initialFavorites = [];
  console.error('Favorites could not be parsed');
}

export const FavoritesProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [favorites, dispatchFavorites] = useReducer(
    favoritesReducer,
    initialFavorites
  );

  useEffect(
    () => localStorage.setItem('favorite', JSON.stringify(favorites)),
    [favorites]
  );

  const contextValue = {
    favorites,
    dispatchFavorites,
  };

  return (
    <FavoriteContext.Provider value={contextValue}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = (): ContextValues =>  {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error(
      'useFavorite must be used within a FavoriteProvider. Wrap a parent component in <FavoriteProvider> to fix this error.'
    );
  }
  return context;
};