export default function favoritesReducer(favorites, action) {
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
            throw new Error('Unhandled action ' + action.type);
    }
}
