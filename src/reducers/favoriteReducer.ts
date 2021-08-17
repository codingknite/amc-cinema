interface Action {
  type: string;
  payload: number
}

const favoritesReducer = (favorites: Array<number>, action: Action): Array<number> => {
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
