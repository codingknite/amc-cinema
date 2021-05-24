import PropTypes from 'prop-types';
import * as BsIcons from 'react-icons/bs';
import { themes } from '../styles/themes';

const LikeFavorites = ({ favorites, dispatchFavorites, movieId }) => (
  <div>
    {favorites.includes(movieId) ? (
      <>
        <BsIcons.BsHeartFill
          color={themes.colors.red}
          onClick={() => {
            dispatchFavorites({
              type: 'favorite',
              payload: movieId,
            });
          }}
        />
      </>
    ) : (
      <>
        <BsIcons.BsHeart
          color={themes.colors.white}
          onClick={() => {
            dispatchFavorites({
              type: 'favorite',
              payload: movieId,
            });
          }}
        />
      </>
    )}
  </div>
);

LikeFavorites.propTypes = {
  favorites: PropTypes.array.isRequired,
  dispatchFavorites: PropTypes.func.isRequired,
  movieId: PropTypes.number.isRequired,
};

export default LikeFavorites;
