import React from 'react';

import Footer from 'components/Footer';
import Discover from 'components/common/Discover/index';

const DiscoverMovies = (): JSX.Element => (
  <>
    <Discover type="movies" />
    <Footer />
  </>
);

export default DiscoverMovies;
