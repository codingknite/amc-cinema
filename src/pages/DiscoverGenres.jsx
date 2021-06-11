/* eslint-disable react/react-in-jsx-scope */
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { useEffect, useReducer } from 'react';

import MetaData from 'components/MetaData';
import { MainLoader } from 'components/Loaders';
import NotFound from 'components/notFound';
import NavBar from 'components/NavBar/index';
import Pagination from 'components/Pagination/index';
import MovieCards from 'components/MovieCards/index';
import paginateReducer from 'reducers/paginateReducer';
import { fetchData } from 'utils/fetchData';
import { genres } from 'data/categories';
import { APIKey, baseUrl } from 'utils/config';
import { useFavorite } from 'context/useFavorites';
import { CardWrapper, PaginationWrapper } from 'styles/discover';

const BrowseMovies = () => {
  const { genre } = useParams();
  const { favorites, dispatchFavorites } = useFavorite();
  const [pageState, dispatch] = useReducer(paginateReducer, 1);

  // Return Id of chosen genre as [{id: x, name: genre}]
  const identifyCategory = (category) => {
    const splitCategory = category.split('-');
    const findGenre = genres.find((g) => g.name.toLowerCase() === category);
    if (findGenre) {
      return genres.filter((genre) => genre.name.toLowerCase() === category)[0]
        .id;
    } else if (category === 'science-fiction') {
      const catSplit = splitCategory.join(' ');
      return genres.filter((genre) => genre.name.toLowerCase() === catSplit)[0]
        .id;
    }
    return 'unknown';
  };

  const genreId = genre && identifyCategory(genre);

  const { data, error, isLoading, isError } = useQuery(
    ['fetch genre movies', APIKey, genreId, pageState],
    () =>
      fetchData(
        `${baseUrl}/discover/movie?api_key=${APIKey}&language=en-US&sort_by=popularity.desc&with_genres=${genreId}&page=${pageState}`
      )
  );

  useEffect(() => {
    dispatch({ type: 'initState' });
  }, [genreId, dispatch]);

  if (genreId === 'unknown') return <NotFound />;
  if (isError) throw error.message;
  if (isLoading) return <MainLoader />;

  const { page, total_pages: pages } = data;

  return (
    <>
      <MetaData title={'Discover Genres'} />
      <NavBar />
      <CardWrapper>
        <MovieCards
          data={data.results}
          favorites={favorites}
          dispatchFavorites={dispatchFavorites}
        />
      </CardWrapper>

      <PaginationWrapper>
        <Pagination
          page={page}
          pages={pages}
          pageState={pageState}
          dispatch={dispatch}
        />
      </PaginationWrapper>
    </>
  );
};

export default BrowseMovies;
