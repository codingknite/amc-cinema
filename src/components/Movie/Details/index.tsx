import React from 'react';
import dayjs from 'dayjs';
import { useQuery } from 'react-query';
import { RiRadioButtonFill } from 'react-icons/ri';

import * as Styles from './styles';
import Rating from 'components/Rating';
import fetchData from 'utils/fetchData';
import handleError from 'utils/handleError';
import generateSlug from 'utils/generateSlug';
import MovieCast from 'components/Movie/Cast';
import { StyledLinkButton } from 'components/common/LinkButton';
import { posterUrl, APIKey, baseUrl } from 'utils/config';
import { ContentLoader } from 'components/Loaders';

interface Genres {
  id: number;
  name: string;
}
interface Props {
  type: string;
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
  trailerId?: number | null;
  posterPath: string;
  movieId: string;
}

const MovieDetails = ({
  type,
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
  posterPath,
  movieId,
}: Props): JSX.Element => {
  const { status, data, error } = useQuery(['cast', APIKey, movieId], () =>
    type === 'movies'
      ? fetchData(
        `${baseUrl}/movie/${movieId}/credits?api_key=${APIKey}&language=en-US`
      )
      : fetchData(
        `${baseUrl}/tv/${movieId}/credits?api_key=${APIKey}&language=en-US`
      )
  );

  handleError(status, error);
  if (status === 'loading') return <ContentLoader size={10} />;

  return (
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
              {genres &&
                genres.map((genre) => (
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

            {data.cast ? (
              <Styles.StyledOverview topMargin="1rem">
                <h2>The Cast</h2>
                <MovieCast cast={data.cast} />
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
              {type === 'movies' ? (
                <StyledLinkButton to={`/booking/${generateSlug(movieId)}`}>
                  Book Now
                </StyledLinkButton>
              ) : null}
            </Styles.Links>
          </Styles.MovieDetails>
        </Styles.HeaderDetails>
      </Styles.DetailsWrapper>
    </>
  );
};

export default MovieDetails;
