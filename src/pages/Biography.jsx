import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { useEffect, useReducer } from 'react';

import CastBiography from 'components/CastBiography/index';
import MovieCards from 'components/MovieCards/index';
import Pagination from 'components/Pagination/index';
import paginateReducer from 'reducers/paginateReducer';
import { fetchData } from 'utils/fetchData';
import { useFavorite } from 'context/useFavorites';
import { Header } from 'components/Discover/Categories/styles';
import { APIKey, baseUrl, imdbUrl, posterUrl } from 'utils/config';

export default function Biography() {
  const { personId } = useParams();
  const { favorites, dispatchFavories } = useFavorite();
  const [pageState, dispatch] = useReducer(paginateReducer, 1);

  const {
    data: bioData,
    isLoading,
    isError,
    error,
  } = useQuery(['biography', personId, APIKey], () =>
    fetchData(`${baseUrl}/person/${personId}?api_key=${APIKey}&language=en-US`)
  );

  const {
    isLoading: featuredLoading,
    isError: featuredError,
    data: featured,
    error: featuredErrMsg,
  } = useQuery(['featured movies', APIKey, personId, pageState], () =>
    fetchData(
      `${baseUrl}/discover/movie?api_key=${APIKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_people=${personId}&page=${pageState}`
    )
  );

  useEffect(() => {
    dispatch({ type: 'initState' });
  }, [personId, dispatch]);

  let featuredMovies, page, pages;

  if (isError) throw error.message;
  if (featuredError) throw featuredErrMsg.message;
  if (!featuredLoading) {
    featuredMovies = featured.results.filter((movie) => movie.poster_path);
    page = featured.page;
    pages = featured.total_pages;
  }

  if (isLoading) return <h2>Loading...</h2>;

  const {
    name,
    birthday,
    id,
    biography,
    homepage,
    place_of_birth: location,
    known_for_department: knownFor,
    profile_path: bioImage,
  } = bioData;

  const imdbLink = imdbUrl + id;
  const posterLink = posterUrl + bioImage;

  return (
    <>
      <CastBiography
        name={name}
        imageUrl={posterLink}
        birthday={birthday}
        location={location}
        knownFor={knownFor}
        biography={biography}
        imdbLink={imdbLink}
        homepage={homepage}
      />

      <section>
        <Header>Also Featured In</Header>
        {featuredLoading ? (
          <h2>Loading...</h2>
        ) : (
          <MovieCards
            data={featuredMovies}
            favorites={favorites}
            dispatchFavorites={dispatchFavories}
          />
        )}

        <Pagination
          pageState={pageState}
          dispatch={dispatch}
          page={page}
          pages={pages}
        />
      </section>
    </>
  );
}
