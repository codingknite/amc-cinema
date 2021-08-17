import React from 'react';

import * as Styles from './styles';
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
        <Styles.StyledLink to="/movies">See All</Styles.StyledLink>
        <MovieCards
          data={data}
          favorites={favorites}
          dispatchFavorites={dispatchFavorites}
        />
      </Styles.Wrapper>
    </>
  );
};

export default LatestMovies;
