import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import { RiRadioButtonFill } from 'react-icons/ri';

import * as Styles from './styles';
import Rating from 'components/Rating';
import generateSlug from 'utils/generateSlug';
import MovieCast from 'components/Movie/Cast';
import { posterUrl, opts } from 'utils/config';

const MovieDetails = ({
  title,
  tagline,
  language,
  date,
  runtime,
  rating,
  overview,
  genres,
  webLink,
  imdbLink,
  trailerId,
  posterPath,
  movieId,
  cast,
}) => (
  <>
    <Styles.DetailsWrapper>
      <Styles.HeaderDetails>
        <Styles.MoviePoster>
          <img src={`${posterUrl}${posterPath}`} alt={title} />
        </Styles.MoviePoster>
        <Styles.MovieDetails>
          <Styles.Title>{title}</Styles.Title>
          <Styles.Tagline>{tagline}</Styles.Tagline>
          <Styles.Info>
            <p>
              <Rating initialRating={Math.round(rating / 2)} />
            </p>
            <p className="language">
              {language} | {runtime} Mins | {dayjs(date).format('MMM, YYYY')}
            </p>
          </Styles.Info>
          <Styles.GenresWrapper>
            {genres.map((genre) => (
              <Styles.Genres key={genre.id}>
                <Styles.GenreIcon>
                  <RiRadioButtonFill color="gray" />
                </Styles.GenreIcon>
                <p>{genre.name}</p>
              </Styles.Genres>
            ))}
          </Styles.GenresWrapper>
          <Styles.StyledOverview>
            <h2>The Plot</h2>
            <p>{overview}</p>
          </Styles.StyledOverview>

          {cast.length ? (
            <Styles.StyledOverview topMargin="1rem">
              <h2>The Cast</h2>
              <MovieCast cast={cast} />
            </Styles.StyledOverview>
          ) : null}

          <Styles.Links>
            {webLink ? (
              <a href={webLink} target="_blank" rel="noopener noreferrer">
                Official Website
              </a>
            ) : null}

            {imdbLink ? (
              <a href={imdbLink} target="_blank" rel="noopener noreferrer">
                Imdb Profile
              </a>
            ) : null}

            <Link to={`/booking/${generateSlug(movieId)}`}>Book Now</Link>
          </Styles.Links>
        </Styles.MovieDetails>
      </Styles.HeaderDetails>
      {trailerId ? (
        <Styles.Details>
          <h2>Trailer</h2>
          <div>
            <LazyLoad>
              <YouTube opts={opts} videoId={trailerId} />
            </LazyLoad>
          </div>
        </Styles.Details>
      ) : null}
    </Styles.DetailsWrapper>
  </>
);

MovieDetails.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  webLink: PropTypes.string.isRequired,
  imdbLink: PropTypes.string.isRequired,
  trailerId: PropTypes.number.isRequired,
  movieId: PropTypes.number.isRequired,
  posterPath: PropTypes.string.isRequired,
  cast: PropTypes.array.isRequired,
};

export default MovieDetails;
