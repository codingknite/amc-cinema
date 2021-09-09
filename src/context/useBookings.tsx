import React, { createContext, useReducer, useEffect, useContext } from 'react';

import {
  bookingsReducer,
  bookingsInfo,
  deleteBooking,
} from 'reducers/bookingsReducer';
import {
  BookedActionProps,
  BookingsProps,
  BookingsActionProps,
} from 'types/types';

interface ContextValues {
  bookedMovies: number[];
  dispatchBooked: React.Dispatch<BookedActionProps>;
  bookedInfo: BookingsProps[];
  dispatchBookedInfo: React.Dispatch<BookingsActionProps>;
  deleteBooked: BookingsProps[];
  dispatchdeleteBooked: React.Dispatch<BookedActionProps>;
}

const BookingsContext = createContext<ContextValues | undefined>(undefined);

let initialBookings: number[] = [];
try {
  initialBookings =
    JSON.parse(localStorage.getItem('bookings') || '[]');
} catch (error) {
  initialBookings = [];
  console.error('Bookings could not be parsed');
}

let intialBookedInfo: BookingsProps[] = [];
try {
  intialBookedInfo =
    JSON.parse(localStorage.getItem('bookedInfo') || '[]');
} catch (error) {
  intialBookedInfo = [];
  console.error('Booked Info could not be parsed');
}

export const BookingsProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [bookedMovies, dispatchBooked] = useReducer(
    bookingsReducer,
    initialBookings
  );
  const [bookedInfo, dispatchBookedInfo] = useReducer(
    bookingsInfo,
    intialBookedInfo
  );
  const [deleteBooked, dispatchdeleteBooked] = useReducer(
    deleteBooking,
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
    deleteBooked,
    dispatchdeleteBooked,
  };
  return (
    <BookingsContext.Provider value={contextValue}>
      {children}
    </BookingsContext.Provider>
  );
};

export const useBookings = (): ContextValues => {
  const context = useContext(BookingsContext);
  if (!context) {
    throw new Error(
      'useBookings must be used within a BookingsProvider. Wrap a parent component in <BookingsProvider> to fix this error.'
    );
  }
  return context;
};
