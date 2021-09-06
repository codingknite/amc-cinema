interface Action {
  type: string;
  payload: number
}

const favoritesReducer = (favorites: number[], action: Action): number[] => {
  switch (action.type) {
  case 'favorite':
    if (favorites.includes(action.payload)) {
      const filteredFavorites = favorites.filter(
        (movie) => movie !== action.payload
      );
      return [...filteredFavorites].reverse();
    }
    return [...favorites, action.payload].reverse();
  default:
    return favorites;
  }
};

export default favoritesReducer;
