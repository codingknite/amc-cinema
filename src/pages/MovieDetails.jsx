import styled from 'styled-components';
import { useQuery } from 'react-query';
import { Element } from 'react-scroll';
import { useParams } from 'react-router-dom';
import { useEffect, useReducer } from 'react';

import Pagination from 'components/Pagination/index';
import MovieCards from 'components/MovieCards/index';
import Details from 'components/Movie/Details/index';
import paginateReducer from 'reducers/paginateReducer';
import { fetchData } from 'utils/fetchData';
import { useFavorite } from 'context/useFavorites';
import { APIKey, baseUrl, imdbUrl } from 'utils/config';
import { Header } from 'components/Discover/Categories/styles';

const Recommendations = styled.section`
  margin-bottom: 1rem;

  h2 {
    padding: 1rem;
  }
`;

const MovieDetails = () => {
  const { movieId } = useParams();
  const { favorites, dispatchFavorites } = useFavorite();
  const [pageState, dispatch] = useReducer(paginateReducer, 1);

  const {
    isLoading: infoLoading,
    isError: infoError,
    data: movieInfo,
    error: infoErrMsg,
  } = useQuery(['trending', APIKey, movieId], () =>
    fetchData(
      `${baseUrl}/movie/${movieId}?api_key=${APIKey}&language=en-US&append_to_response=videos`
    )
  );

  const {
    data: castData,
    isError: castError,
    isLoading: castLoading,
    error: castErrMsg,
  } = useQuery(['cast', APIKey, movieId], () =>
    fetchData(
      `${baseUrl}/movie/${movieId}/credits?api_key=${APIKey}&language=en-US`
    )
  );

  const {
    isLoading: recommendedLoading,
    isError: recommendedError,
    data: movieRecommendations,
    error: recommErrMsg,
  } = useQuery(['recommendations', APIKey, movieId, pageState], () =>
    fetchData(
      `${baseUrl}/movie/${movieId}/recommendations?api_key=${APIKey}&language=en-US&page=${pageState}`
    )
  );

  useEffect(() => {
    dispatch({ type: 'initState' });
  }, [movieId, dispatch]);

  let page, pages, totalResults;

  if (infoError) throw infoErrMsg.message;
  if (castError) throw castErrMsg.message;
  if (recommendedError) throw recommErrMsg.message;

  if (!recommendedLoading) {
    page = movieRecommendations.page;
    pages = movieRecommendations.total_pages;
    totalResults = movieRecommendations.total_results;
  }

  if (infoLoading) return <h2>Loading...</h2>;
  if (castLoading) return null;

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
    (video) => video.site === 'YouTube' && video.size === 1080
  )[0];
  const trailerKey = trailer ? trailer.key : null;
  const cast = castData.cast.filter((cast) => cast.profile_path);

  return (
    <>
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
        movieTitle={title}
        movieId={movieId}
        posterPath={posterPath}
        cast={cast}
      />

      <Element name="scrollelement">
        <Recommendations>
          <Header>You might also like</Header>
          {recommendedLoading ? (
            <h2>Loading...</h2>
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
              page={page}
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
