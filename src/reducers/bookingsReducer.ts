import {
  BookedActionProps,
  BookingsProps,
  BookingsActionProps,
} from 'types/types';

export const bookingsReducer = (
  bookedMovies: number[],
  action: BookedActionProps
): number[] => {
  switch (action.type) {
  case 'ADD_BOOKED':
    if (bookedMovies.includes(action.movieId)) {
      return bookedMovies;
    }
    return [...bookedMovies, action.movieId];

  case 'REMOVE_BOOKED':
    return bookedMovies.filter((movie) => movie !== action.movieId);
  default:
    return bookedMovies;
  }
};

export const bookingsInfo = (
  bookedInfo: BookingsProps[],
  action: BookingsActionProps
): BookingsProps[] => {
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
  default:
    return bookedInfo;
  }
};

export const deleteBooking = (
  bookedInfo: BookingsProps[],
  action: BookedActionProps
): BookingsProps[] => {
  switch (action.type) {
  case 'REMOVE_BOOKEDINFO':
    return bookedInfo.filter((movie) => movie.id !== action.movieId);
  default:
    return bookedInfo;
  }
};
