import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { useEffect, useReducer } from 'react';

import { MainLoader } from 'components/Loaders';
import NotFound from 'components/notFound';
import MetaData from 'components/MetaData';
import NavBar from 'components/NavBar/index';
import CastBiography from 'components/CastBiography/index';
import MovieCards from 'components/MovieCards/index';
import Pagination from 'components/Pagination/index';
import paginateReducer from 'reducers/paginateReducer';
import fetchData from 'utils/fetchData';
import { ContentLoader } from 'components/Loaders';
import { useFavorite } from 'context/useFavorites';
import { Header } from 'components/LandingPage/LatestMovies/styles';
import { APIKey, baseUrl, imdbBiography, posterUrl } from 'utils/config';
import { MovieResults } from 'types/types';
import handleError from 'utils/handleError';
import Footer from 'components/Footer';

const Biography = (): JSX.Element => {
  const { personId } = useParams();
  const { favorites, dispatchFavorites } = useFavorite();
  const [pageState, dispatch] = useReducer(paginateReducer, 1);

  const {
    status: bioStatus,
    data: bioData,
    error: bioError,
  } = useQuery(['biography', personId, APIKey], () =>
    fetchData(`${baseUrl}/person/${personId}?api_key=${APIKey}&language=en-US`)
  );

  const {
    status: featuredStatus,
    data: featured,
    error: featuredError,
  } = useQuery(['featured movies', APIKey, personId, pageState], () =>
    fetchData(
      `${baseUrl}/discover/movie?api_key=${APIKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_people=${personId}&page=${pageState}`
    )
  );

  useEffect(() => {
    dispatch({ type: 'initState' });
  }, [personId, dispatch]);

  let featuredMovies, pages;

  handleError(bioStatus, bioError);
  handleError(featuredStatus, featuredError);

  if (featuredStatus !== 'loading') {
    featuredMovies = featured.results.filter(
      (movie: MovieResults) => movie.poster_path
    );
    pages = featured.total_pages;
  }

  if (bioData === 404) return <NotFound />;
  if (bioStatus === 'loading') return <MainLoader />;

  const {
    name,
    birthday,
    imdb_id: id,
    biography,
    homepage,
    place_of_birth: location,
    known_for_department: knownFor,
    profile_path: bioImage,
  } = bioData;

  const imdbLink: string = imdbBiography + id;
  const posterLink: string = posterUrl + bioImage;

  return (
    <>
      <MetaData title={`${name} | Biography`} />
      <NavBar />
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
        {featuredStatus === 'loading' ? (
          <ContentLoader />
        ) : featuredMovies.length === 0 ? (
          <h4 style={{ padding: '1rem' }}>
            Sorry We Couldn<span>&apos;</span>t Find Any Recommendations At This
            Time
          </h4>
        ) : (
          <MovieCards
            data={featuredMovies}
            favorites={favorites}
            dispatchFavorites={dispatchFavorites}
          />
        )}

        <Pagination pageState={pageState} dispatch={dispatch} pages={pages} />
      </section>
      <Footer />
    </>
  );
};

export default Biography;
