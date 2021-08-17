import React from 'react';

import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import MetaData from 'components/MetaData';
import MakeBooking from 'components/Booking/MakeBooking/index';

const BookMovie = (): JSX.Element => (
  <>
    <MetaData title="Make a Booking" />
    <NavBar />
    <MakeBooking />
    <Footer />
  </>
);

export default BookMovie;
