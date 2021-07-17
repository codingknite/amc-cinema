import React from 'react';

import NavBar from 'components/NavBar';
import MetaData from 'components/MetaData';
import MakeBooking from 'components/Booking/MakeBooking/index';

const BookMovie = (): JSX.Element => (
  <>
    <MetaData title="Make a Booking" />
    <NavBar />
    <MakeBooking />
  </>
);

export default BookMovie;
