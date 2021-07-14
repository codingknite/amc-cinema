import React from 'react';
import { useState } from 'react';
import Lazyload from 'react-lazyload';

import * as Styles from './styles';
import Rating from 'components/Rating';
import LikeFavorite from 'components/LikeFavorite';
import { posterUrl } from 'utils/config';
import { StyledLink } from 'components/common/LinkButton';
import { MovieResults } from 'types/types';

interface Props {
  data: MovieResults[];
  type?: string;
  favorites: [];
  dispatchFavorites: () => void;
}

const MovieCards = ({
  data,
  type,
  favorites,
  dispatchFavorites,
}: Props): JSX.Element => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <Styles.CardsWrapper>
      {data.map((movie) => (
        <Styles.MovieCard key={movie.id}>
          <StyledLink
            to={
              !type
                ? `/movie/${movie.id}`
                : type === 'movies'
                  ? `/movie/${movie.id}`
                  : `/serie/${movie.id}`
            }
          >
            <Styles.PosterWrapper>
              <Lazyload>
                <Styles.MoviePoster
                  imageLoaded={imageLoaded}
                  src={posterUrl + movie.poster_path}
                  className="movie-banner"
                  alt={
                    !type
                      ? `${movie.title}`
                      : type === 'movies'
                        ? `${movie.title}`
                        : `${movie.name}`
                  }
                  onLoad={() => setImageLoaded(true)}
                />
                <Styles.Title>
                  {!type
                    ? `${movie.title}`
                    : type === 'movies'
                      ? `${movie.title}`
                      : `${movie.name}`}
                </Styles.Title>
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

export default MovieCards;
