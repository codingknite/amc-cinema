import FavoriteMovies from 'components/FavoriteMovies';

import NavBar from 'components/NavBar/index';
import MetaData from 'components/MetaData';

const Favorites = () => {
  return (
    <>
      <MetaData title="Favorite Movies" />
      <NavBar />
      <FavoriteMovies />
    </>
  );
};

export default Favorites;
