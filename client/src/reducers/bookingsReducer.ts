interface Action {
  type: string;
  movieId: number;
}

interface BookedAction {
  type: string;
  movieId: number;
  adults: number;
  kids: number;
  seniors: number;
  date: string;
  cinema: string;
  screen: string;
}

interface BookedInfo {
  id: number;
  adults: number;
  kids: number;
  seniors: number;
  date: string;
  cinema: string;
  screen: string;
}

export const bookingsReducer = (
  bookedMovies: Array<number>,
  action: Action
): Array<number> => {
  switch (action.type) {
  case 'ADD_BOOKED':
    if (bookedMovies.includes(action.movieId)) {
      return bookedMovies;
    }
    return [...bookedMovies, action.movieId];

  case 'REMOVE_BOOKED':
    return bookedMovies.filter((movie) => movie !== action.movieId);
  default:
    throw new Error(`Unhandled action ${action.type}`);
  }
};

export const bookingsInfo = (bookedInfo: BookedInfo[], action: BookedAction): BookedInfo[] => {
  switch (action.type) {
  case 'ADD_BOOKEDINFO':
    // eslint-disable-next-line no-case-declarations
    const filteredArray = bookedInfo.filter(
      (movie) => movie.id !== action.movieId
    );

    return [
      ...filteredArray,
      {
        id: action.movieId,
        adults: action.adults,
        kids: action.kids,
        seniors: action.seniors,
        date: action.date,
        cinema: action.cinema,
        screen: action.screen,
      },
    ];
  case 'REMOVE_BOOKEDINFO':
    return bookedInfo.filter((movie) => movie.id !== action.movieId);
  default:
    throw new Error(`Unhandled action ${action.type}`);
  }
};
