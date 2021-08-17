git add import PropTypes from 'prop-types';
import React, { useReducer, useEffect, useContext } from 'react';

import { bookingsReducer, bookingsInfo } from 'reducers/bookingsReducer';

const BookingsContext = React.createContext(null);

let initialBookings;
try {
  initialBookings =
    JSON.parse(localStorage.getItem('bookings')).reverse() ?? [];
} catch (error) {
  initialBookings = [];
  console.error('Bookings could not be parsed');
}

let intialBookedInfo;
try {
  intialBookedInfo = JSON.parse(localStorage.getItem('bookedInfo')).reverse() ?? [];
} catch (error) {
  intialBookedInfo = [];
  console.error('Booked Info could not be parsed');
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const BookingsProvider = ({ children }) => {
  const [bookedMovies, dispatchBooked] = useReducer(
    bookingsReducer,
    initialBookings
  );
  const [bookedInfo, dispatchBookedInfo] = useReducer(
    bookingsInfo,
    intialBookedInfo
  );

  useEffect(
    () => localStorage.setItem('bookedInfo', JSON.stringify(bookedInfo)),
    [bookedInfo]
  );
  useEffect(
    () => localStorage.setItem('bookings', JSON.stringify(bookedMovies)),
    [bookedMovies]
  );

  const contextValue = {
    bookedMovies,
    dispatchBooked,
    bookedInfo,
    dispatchBookedInfo,
  };
  return (
    <BookingsContext.Provider value={contextValue}>
      {children}
    </BookingsContext.Provider>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useBookings = () => {
  const context = useContext(BookingsContext);
  if (!context) {
    throw new Error(
      'useBookings must be used within a BookingsProvider. Wrap a parent component in <BookingsProvider> to fix this error.'
    );
  }
  return context;
};

BookingsProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
