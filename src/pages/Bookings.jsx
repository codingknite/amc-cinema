import MyBookings from 'components/MyBookings/index';

import NavBar from 'components/NavBar';
import MetaData from 'components/MetaData';

const Bookings = () => {
  return (
    <>
      <MetaData title="My Bookings" />
      <NavBar />
      <MyBookings />
    </>
  );
};

export default Bookings;
