import { useState } from 'react';
import PropTypes from 'prop-types';
import Lazyload from 'react-lazyload';
import { Link } from 'react-router-dom';

import Rating from '../Rating';
import * as Styles from './styles';
import LikeFavorite from '../LikeFavorite';
import { posterUrl } from '../../utils/config';

const MovieCards = ({ data, favorites, dispatchFavorites }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <Styles.CardsWrapper>
      {data.map((movie) => (
        <Styles.MovieCard key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
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
          </Link>
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
