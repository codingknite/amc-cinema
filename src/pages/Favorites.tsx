import React from 'react';
import FavoriteMovies from 'components/FavoriteMovies';

import NavBar from 'components/NavBar/index';
import Footer from 'components/Footer';
import MetaData from 'components/MetaData';

const Favorites = (): JSX.Element => (
  <>
    <MetaData title="Favorite Movies" />
    <NavBar />
    <FavoriteMovies />
    <Footer />
  </>
);

export default Favorites;
