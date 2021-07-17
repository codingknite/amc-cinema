import React from 'react';
import FavoriteMovies from 'components/FavoriteMovies';

import NavBar from 'components/NavBar/index';
import MetaData from 'components/MetaData';

const Favorites = (): JSX.Element => (
  <>
    <MetaData title="Favorite Movies" />
    <NavBar />
    <FavoriteMovies />
  </>
);

export default Favorites;
