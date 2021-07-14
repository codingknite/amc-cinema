import React from 'react';
import dayjs from 'dayjs';
// import YouTube from 'react-youtube';
import LazyLoad from 'react-lazyload';
import { RiRadioButtonFill } from 'react-icons/ri';

import * as Styles from './styles';
import Rating from 'components/Rating';
import generateSlug from 'utils/generateSlug';
import MovieCast from 'components/Movie/Cast';
import { Cast } from 'types/types';
import { posterUrl } from 'utils/config';
import { StyledLinkButton } from 'components/common/LinkButton';

interface Genres {
  id: number;
  name: string;
}
interface Props {
  title: string;
  tagline: string;
  language: string;
  date: string;
  runtime: number;
  rating: number;
  overview: string;
  genres: Array<Genres>;
  webLink: string;
  imdbLink: string | null;
  trailerId: number | null;
  posterPath: string;
  movieId: string;
  cast: Cast[];
}

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
}: Props): JSX.Element => (
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
              <Styles.WebLinks
                href={webLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Official Website
              </Styles.WebLinks>
            ) : null}

            {imdbLink ? (
              <Styles.WebLinks
                href={imdbLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Imdb Profile
              </Styles.WebLinks>
            ) : null}
            <StyledLinkButton to={`/booking/${generateSlug(movieId)}`}>
              Book Now
            </StyledLinkButton>
          </Styles.Links>
        </Styles.MovieDetails>
      </Styles.HeaderDetails>
      {trailerId ? (
        <Styles.Details>
          <h2>Trailer</h2>
          <div>
            <LazyLoad>
              {/* <YouTube opts={opts} videoId={trailerId} /> */}
            </LazyLoad>
          </div>
        </Styles.Details>
      ) : null}
    </Styles.DetailsWrapper>
  </>
);

export default MovieDetails;
