import React from 'react';
import MakeBooking from 'components/Booking/MakeBooking/index';

import NavBar from 'components/NavBar';
import MetaData from 'components/MetaData';

const BookMovie = () => {
  return (
    <>
      <MetaData title="Make a Booking" />
      <NavBar />
      <MakeBooking />
    </>
  );
};

export default BookMovie;
