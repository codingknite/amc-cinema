import React from 'react';
import PropTypes from 'prop-types';
import { GiRead } from 'react-icons/gi';
import { BsStarFill } from 'react-icons/bs';
import { SiGooglecalendar } from 'react-icons/si';

import * as Styles from './styles';
import { themes } from 'styles/themes';
import { genres } from 'data/categories';
import { posterUrl } from 'utils/config';
import { StyledLinkButton } from 'components/common/LinkButton';
import NextHighlight from './NextHighlight/index';

const FeaturedMovie = ({ moviesData }) => {
  const findGenre = (id) => genres.filter((genre) => genre.id === id)[0].name;
  const trialData = moviesData.data;
  const trialArray = [];
  let trialData2;
  if (trialData) {
    trialArray.push(trialData[0]);
    trialData2 = trialData[1];
  }

  const { backdrop_path: moviePoster, title: movieTitle } = trialData2;

  console.log(moviesData);
  return (
    <Styles.MovieWrapper>
      {trialArray.map((movie) => (
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
              <StyledLinkButton to={`/movie/${movie.id}`} bottommargin="true">
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

FeaturedMovie.propTypes = {
  movie: PropTypes.array.isRequired,
};

export default FeaturedMovie;