import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { Element } from 'react-scroll';

import fetchData from 'utils/fetchData';
import MetaData from 'components/MetaData';
import NotFound from 'components/notFound';
import handleError from 'utils/handleError';
import Pagination from 'components/Pagination/index';
import MovieCards from 'components/MovieCards/index';
import Details from 'components/Movie/Details/index';
import paginateReducer from 'reducers/paginateReducer';
import { useFavorite } from 'context/useFavorites';
import { APIKey, baseUrl, imdbUrl } from 'utils/config';
import { Header } from 'components/LandingPage/LatestMovies/styles';
import { MainLoader, ContentLoader } from 'components/Loaders';

const Recommendations = styled.section`
  margin-bottom: 1rem;

  h2 {
    padding: 1rem;
  }
`;

interface Props {
  type: string;
  ID: string;
}

const DetailedInfo = ({ type, ID }: Props): JSX.Element => {
  const { favorites, dispatchFavorites } = useFavorite();
  const [pageState, dispatch] = useReducer(paginateReducer, 1);

  const {
    status: infoStatus,
    data: info,
    error: infoError,
  } = useQuery(['movie', APIKey, ID], () =>
    type === 'movies'
      ? fetchData(
        `${baseUrl}/movie/${ID}?api_key=${APIKey}&language=en-US&append_to_response=videos`
      )
      : fetchData(
        `${baseUrl}/tv/${ID}?api_key=${APIKey}&language=en-US&append_to_response=videos`
      )
  );

  const {
    status: recommStatus,
    data: recommendations,
    error: recommError,
  } = useQuery(['recommendations', APIKey, ID, pageState], () =>
    type === 'movies'
      ? fetchData(
        `${baseUrl}/movie/${ID}/recommendations?api_key=${APIKey}&language=en-US&page=${pageState}`
      )
      : fetchData(
        `${baseUrl}/tv/${ID}/recommendations?api_key=${APIKey}&language=en-US&page=${pageState}`
      )
  );

  useEffect(() => {
    dispatch({ type: 'initState' });
  }, [ID, dispatch]);

  let pages, totalResults;

  handleError(infoStatus, infoError);
  handleError(recommStatus, recommError);

  if (recommStatus !== 'loading') {
    pages = recommendations.total_pages;
    totalResults = recommendations.total_results;
  }

  if (info === 404) return <NotFound />;
  if (infoStatus === 'loading') return <MainLoader />;

  const {
    tagline,
    overview,
    genres,
    poster_path: posterPath,
    homepage: webLink,
    vote_average: rating,
    spoken_languages: languages,
    imdb_id: imdb,
  } = info;

  const title = type === 'movies' ? info.title : info.name;
  const date = type === 'movies' ? info.release_date : info.first_air_date;
  const runtime = type === 'movies' ? info.runtime : info.episode_run_time[0];

  const imdbLink = imdb ? imdbUrl + imdb : null;
  const language = languages && languages[0] ? languages[0].name : 'English';

  return (
    <>
      <MetaData title={`${title}`} />
      <Details
        type={type}
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
        movieId={ID}
        posterPath={posterPath}
      />

      <Element name="scrollelement">
        <Recommendations>
          <Header>You might also like</Header>
          {recommStatus === 'loading' ? (
            <ContentLoader />
          ) : type === 'movies' ? (
            <MovieCards
              data={recommendations.results}
              favorites={favorites}
              dispatchFavorites={dispatchFavorites}
            />
          ) : type === 'series' ? (
            <MovieCards type='series' data={recommendations.results} />
          ) : (
            <h4>
              Sorry We Couldn<span>&apos;</span>t Find Any Recommendations For
              You
            </h4>
          )}

          {totalResults ? (
            <Pagination
              pageState={pageState}
              dispatch={dispatch}
              pages={pages}
            />
          ) : null}
        </Recommendations>
      </Element>
    </>
  );
};

export default DetailedInfo;
