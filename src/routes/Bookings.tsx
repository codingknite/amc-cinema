import React from 'react';
import MyBookings from 'components/MyBookings/index';

import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import MetaData from 'components/MetaData';

const Bookings = (): JSX.Element => (
  <>
    <MetaData title="My Bookings" />
    <NavBar />
    <MyBookings />
    <Footer />
  </>
);

export default Bookings;
