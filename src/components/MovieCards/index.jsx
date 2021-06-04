import { useState } from 'react';
import PropTypes from 'prop-types';
import Lazyload from 'react-lazyload';

import * as Styles from './styles';
import Rating from 'components/Rating';
import LikeFavorite from 'components/LikeFavorite';
import { posterUrl } from 'utils/config';
import { StyledLink } from 'components/common/LinkButton';

const MovieCards = ({ data, favorites, dispatchFavorites }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <Styles.CardsWrapper>
      {data.map((movie) => (
        <Styles.MovieCard key={movie.id}>
          <StyledLink to={`/movie/${movie.id}`}>
            <Styles.PosterWrapper imageLoaded={imageLoaded}>
              <Lazyload>
                <Styles.MoviePoster
                  src={posterUrl + movie.poster_path}
                  className="movie-banner"
                  alt={movie.title}
                  onLoad={() => setImageLoaded(true)}
                />
                <Styles.Title>{movie.title}</Styles.Title>
              </Lazyload>
            </Styles.PosterWrapper>
          </StyledLink>
          <Styles.MovieInfo className="movie-info">
            <Styles.MovieRating>
              <Rating initialRating={Math.round(movie.vote_average / 2)} />
            </Styles.MovieRating>
            <Styles.LikeMovie>
              <LikeFavorite
                favorites={favorites}
                dispatchFavorites={dispatchFavorites}
                movieId={movie.id}
              />
            </Styles.LikeMovie>
          </Styles.MovieInfo>
        </Styles.MovieCard>
      ))}
    </Styles.CardsWrapper>
  );
};

MovieCards.propTypes = {
  data: PropTypes.array.isRequired,
  favorites: PropTypes.array.isRequired,
  dispatchFavorites: PropTypes.func.isRequired,
};

export default MovieCards;
