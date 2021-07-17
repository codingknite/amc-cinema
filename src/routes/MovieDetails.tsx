import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { Element } from 'react-scroll';
import { useParams } from 'react-router-dom';
import { useEffect, useReducer } from 'react';

import NavBar from 'components/NavBar/index';
import Pagination from 'components/Pagination/index';
import MovieCards from 'components/MovieCards/index';
import Details from 'components/Movie/Details/index';
import paginateReducer from 'reducers/paginateReducer';
import fetchData from 'utils/fetchData';
import { useFavorite } from 'context/useFavorites';
import { APIKey, baseUrl, imdbUrl } from 'utils/config';
import { Header } from 'components/LandingPage/LatestMovies/styles';
import { MainLoader, ContentLoader } from 'components/Loaders';
import NotFound from 'components/notFound';
import MetaData from 'components/MetaData';
import { Cast } from 'types/types';
import handleError from 'utils/handleError';

interface VideoType {
  site: string;
  size: number;
}
const Recommendations = styled.section`
  margin-bottom: 1rem;

  h2 {
    padding: 1rem;
  }
`;

const MovieDetails = (): JSX.Element => {
  const { movieId } = useParams();
  const { favorites, dispatchFavorites } = useFavorite();
  const [pageState, dispatch] = useReducer(paginateReducer, 1);

  const {
    status: movieInfoStatus,
    data: movieInfo,
    error: infoError,
  } = useQuery(['trending', APIKey, movieId], () =>
    fetchData(
      `${baseUrl}/movie/${movieId}?api_key=${APIKey}&language=en-US&append_to_response=videos`
    )
  );

  const {
    status: castStatus,
    data: castData,
    error: castError,
  } = useQuery(['cast', APIKey, movieId], () =>
    fetchData(
      `${baseUrl}/movie/${movieId}/credits?api_key=${APIKey}&language=en-US`
    )
  );

  const {
    status: recommStatus,
    data: movieRecommendations,
    error: recommError,
  } = useQuery(['recommendations', APIKey, movieId, pageState], () =>
    fetchData(
      `${baseUrl}/movie/${movieId}/recommendations?api_key=${APIKey}&language=en-US&page=${pageState}`
    )
  );

  useEffect(() => {
    dispatch({ type: 'initState' });
  }, [movieId, dispatch]);

  let pages, totalResults;

  handleError(castStatus, castError);
  handleError(recommStatus, recommError);
  handleError(movieInfoStatus, infoError);

  if (recommStatus !== 'loading') {
    pages = movieRecommendations.total_pages;
    totalResults = movieRecommendations.total_results;
  }

  if (movieInfo === 404) return <NotFound />;
  if (movieInfoStatus === 'loading') return <MainLoader />;

  const {
    title,
    tagline,
    runtime,
    overview,
    genres,
    poster_path: posterPath,
    homepage: webLink,
    release_date: date,
    vote_average: rating,
    spoken_languages: languages,
    imdb_id: imdb,
    videos: trailers,
  } = movieInfo;

  const language = languages[0] ? languages[0].name : 'English';
  const imdbLink = imdb ? imdbUrl + imdb : null;

  const trailer = trailers.results.filter(
    (video: VideoType) => video.site === 'YouTube' && video.size === 1080
  )[0];
  const trailerKey = trailer ? trailer.key : null;
  const cast: Cast[] = castData.cast.filter((cast: Cast) => cast.profile_path);

  return (
    <>
      <MetaData title={`${title}`} />
      <NavBar />
      <Details
        title={title}
        tagline={tagline}
        language={language}
        date={date}
        runtime={runtime}
        rating={rating}
        overview={overview}
        genres={genres}
        webLink={webLink}
        imdbLink={imdbLink}
        trailerId={trailerKey}
        movieId={movieId}
        posterPath={posterPath}
        cast={cast}
      />

      <Element name="scrollelement">
        <Recommendations>
          <Header>You might also like</Header>
          {recommStatus === 'loading' ? (
            <ContentLoader />
          ) : (
            <MovieCards
              data={movieRecommendations.results}
              favorites={favorites}
              dispatchFavorites={dispatchFavorites}
            />
          )}

          {totalResults ? (
            <Pagination
              pageState={pageState}
              dispatch={dispatch}
              pages={pages}
            />
          ) : (
            <h4>
              Sorry We Couldn<span>&apos;</span>t Find Any Recommendations For
              You
            </h4>
          )}
        </Recommendations>
      </Element>
    </>
  );
};

export default MovieDetails;
