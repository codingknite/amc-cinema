import { useReducer } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import Pagination from 'components/Pagination/index';
import MovieCards from 'components/MovieCards/index';
import paginateReducer from 'reducers/paginateReducer';
import { fetchData } from 'utils/fetchData';
import { APIKey, baseUrl } from 'utils/config';
import { useFavorite } from 'context/useFavorites';
import { CardWrapper, PaginationWrapper } from 'styles/discover';
import MainLoader from 'components/Loader';

const DiscoverMovies = () => {
  const { category } = useParams();
  const { favorites, dispatchFavorites } = useFavorite();
  const [pageState, dispatch] = useReducer(paginateReducer, 1);

  let discoverCategory;

  switch (category) {
    case 'now-playing': {
      discoverCategory = 'now_playing';
      break;
    }
    case 'coming-soon': {
      discoverCategory = 'upcoming';
      break;
    }
    case 'trending': {
      discoverCategory = 'popular';
      break;
    }
    default: {
      discoverCategory = 'top_rated';
      break;
    }
  }

  const { data, error, isLoading, isError } = useQuery(
    ['fetch data', discoverCategory, APIKey, pageState],
    () =>
      fetchData(
        `${baseUrl}/movie/${discoverCategory}?api_key=${APIKey}&language=en-US&page=${pageState}`
      )
  );

  if (isError) throw error.message;
  if (isLoading) return <MainLoader />;

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

export default DiscoverMovies;
