/* eslint-disable no-case-declarations */
export function bookingsReducer(bookedMovies, action) {
  switch (action.type) {
  case 'ADD_BOOKED':
    if (bookedMovies.includes(action.movieId)) {
      return bookedMovies;
    } else {
      return [...bookedMovies, action.movieId];
    }
  case 'REMOVE_BOOKED':
    return bookedMovies.filter(movie => movie !== action.movieId);
  default:
    throw new Error('Unhandled action ' + action.type);
  }
}

export function bookingsInfo(bookedInfo, action) {
  switch (action.type) {
  case 'ADD_BOOKEDINFO':
    const filteredArray = bookedInfo.filter(movie => movie.id !== action.movieId);
    return [...filteredArray, {
      id: action.movieId,
      adults: action.adults,
      kids: action.kids,
      seniors: action.seniors,
      date: action.date,
      cinema: action.cinema,
      screen: action.screen
    }];
  case 'REMOVE_BOOKEDINFO':
    return bookedInfo.filter(movie => movie.id !== action.movieId);
  default:
    throw new Error('Unhandled action ' + action.type);
  }
}
