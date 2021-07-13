import React, { useState, useEffect } from 'react';
import { GiRead } from 'react-icons/gi';
import { BsStarFill } from 'react-icons/bs';
import { SiGooglecalendar } from 'react-icons/si';

import * as Styles from './styles';
import { themes } from 'styles/themes';
import { genres } from 'data/categories';
import { posterUrl } from 'utils/config';
import NextHighlight from './NextHighlight/index';
import { StyledLinkButton } from 'components/common/LinkButton';
import { AmcApiResponse } from 'types/types';

interface Props {
  moviesData: AmcApiResponse;
}
interface InitialState {
  currentHighlight: number;
  nextHighlight: number;
}

interface NextMovieHighlightProps {
  backdrop_path: string | null;
  title: string;
}

const FeaturedMovie = ({ moviesData }: Props): JSX.Element => {
  const [highlightIndex, setHighlightIndex] = useState<InitialState>({
    currentHighlight: 0,
    nextHighlight: 1,
  });

  const findGenre = (id: number) =>
    genres.filter((genre) => genre.id === id)[0].name;

  const mainHighlight = [];
  mainHighlight.push(moviesData.data[highlightIndex.currentHighlight]);

  const nextMovieHighlight = moviesData.data[highlightIndex.nextHighlight];
  const {
    backdrop_path: moviePoster,
    title: movieTitle,
  }: NextMovieHighlightProps = nextMovieHighlight;

  useEffect(() => {
    const timer = setInterval(() => {
      if (highlightIndex.currentHighlight === 0) {
        setHighlightIndex(() => {
          return { ...highlightIndex, currentHighlight: 1, nextHighlight: 2 };
        });
      } else if (highlightIndex.currentHighlight === 1) {
        setHighlightIndex(() => {
          return { ...highlightIndex, currentHighlight: 2, nextHighlight: 0 };
        });
      } else if (highlightIndex.currentHighlight === 2) {
        setHighlightIndex(() => {
          return { ...highlightIndex, currentHighlight: 0, nextHighlight: 1 };
        });
      }
    }, 12000); // 12 seconds
    return () => clearInterval(timer);
  }, [highlightIndex.currentHighlight]);

  return (
    <Styles.MovieWrapper>
      {mainHighlight.map((movie) => (
        <Styles.MovieWrapper
          key={movie.id}
          posterPath={posterUrl + movie.backdrop_path}
        >
          <Styles.MovieStats>
            <p className="stats">{movie.release_date.split('-')[0]}</p>
            <p className="stats">{findGenre(movie.genre_ids[0])}</p>
            <div className="rating">
              <BsStarFill color={themes.colors.orange} />
              <p>{movie.vote_average}</p>
            </div>
          </Styles.MovieStats>
          <Styles.MovieInfo>
            <p className="title">{movie.title}</p>
            <p className="overview">
              {movie.overview.split(' ').slice(0, 40).join(' ') + ' . . .'}
            </p>
            <div className="buttons">
              <StyledLinkButton to={`/movie/${movie.id}`}>
                <GiRead />
                <p>Learn More</p>
              </StyledLinkButton>

              <StyledLinkButton to={`/booking/${movie.id}`}>
                <SiGooglecalendar />
                <p>Book Movie</p>
              </StyledLinkButton>
            </div>
          </Styles.MovieInfo>
        </Styles.MovieWrapper>
      ))}
      <NextHighlight moviePoster={moviePoster} movieTitle={movieTitle} />
    </Styles.MovieWrapper>
  );
};

export default FeaturedMovie;
