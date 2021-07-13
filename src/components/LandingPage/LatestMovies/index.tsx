import React from 'react';
import { Link } from 'react-router-dom';

import * as Styles from './styles';
import generateSlug from 'utils/generateSlug';
import { useFavorite } from 'context/useFavorites';
import MovieCards from 'components/MovieCards/index';
import { MovieResults } from 'types/types';

interface Props {
  category: string;
  data: MovieResults[];
}

const LatestMovies = ({ category, data }: Props): JSX.Element => {
  const { favorites, dispatchFavorites } = useFavorite();

  return (
    <>
      <Styles.Wrapper>
        <Styles.Header>{category}</Styles.Header>
        <MovieCards
          data={data}
          favorites={favorites}
          dispatchFavorites={dispatchFavorites}
        />
        <Link to={`/discover/${generateSlug(category)}`}>See All</Link>
      </Styles.Wrapper>
    </>
  );
};

export default LatestMovies;
