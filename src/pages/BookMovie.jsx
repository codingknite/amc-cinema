/* eslint-disable react/react-in-jsx-scope */
import MakeBooking from 'components/Booking/MakeBooking/index';

import NavBar from 'components/NavBar';
import MetaData from 'components/MetaData';

const BookMovie = () => (
  <>
    <MetaData title="Make a Booking" />
    <NavBar />
    <MakeBooking />
  </>
);

export default BookMovie;
