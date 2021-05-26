import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { useEffect, useReducer } from 'react';

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
    if (category) {
      if (splitCategory.length === 1) {
        return genres.filter(
          (genre) => genre.name.toLowerCase() === category
        )[0].id;
      } else if (splitCategory.length > 1) {
        const catSplit = splitCategory.join(' ');
        return genres.filter(
          (genre) => genre.name.toLowerCase() === catSplit
        )[0].id;
      }
    }
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

  if (isError) throw error.message;
  if (isLoading) return <h2>Loading...</h2>;

  const { page, total_pages: pages } = data;

  return (
    <>
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
