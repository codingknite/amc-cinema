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
      return [...filteredFavorites];
    }
    return [...favorites, action.payload];
  default:
    throw new Error(`Unhandled action ${action.type}`);
  }
};

export default favoritesReducer;
