import React, { useState, useReducer } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { useQuery } from 'react-query';

import * as config from 'utils/config';
import fetchData from 'utils/fetchData';
import MetaData from 'components/MetaData';
import handleError from 'utils/handleError';
import NavBar from 'components/NavBar/index';
import Pagination from 'components/Pagination/index';
import MovieCards from 'components/MovieCards/index';
import paginateReducer from 'reducers/paginateReducer';
import { GenresInfo } from 'types/types';
import { genres } from 'data/categories';
import { APIKey, baseUrl } from 'utils/config';
import { useFavorite } from 'context/useFavorites';
import { PaginationWrapper } from 'styles/discover';
import { ContentLoader } from 'components/Loaders';
import {
  SliderWrapper,
  SliderButton,
} from 'components/LandingPage/BrowseGenres/styles';

const StyledSliderWrapper = styled(SliderWrapper)`
  margin-top: 8rem;
`;

interface Props {
  type: string;
}

interface InitialState {
  type: string;
  name: string;
  id: number | string; // string due to template string on line 59
  genresArray: GenresInfo[];
}

interface PageProps {
  total_pages: number;
}

const Discover = ({ type }: Props): JSX.Element => {
  const { favorites, dispatchFavorites } = useFavorite();
  const [pageState, dispatch] = useReducer(paginateReducer, 1);

  // consider using a custom hook for the slider to avoid unneccesary repetition - DRY

  const movieGenres =
    type === 'movies'
      ? genres.filter((genre) => genre.movies)
      : genres.filter((genre) => genre.series);

  const initialGenreState: InitialState = {
    type: `${type === 'movies' ? 'movies' : 'series'}`,
    name: `${type === 'movies' ? 'Science Fiction' : 'Sci-Fi & Fantasy'}`,
    id: `${type === 'movies' ? 878 : 10765}`,
    genresArray: movieGenres,
  };

  const [selectedGenre, setSelectedGenre] = useState(initialGenreState);

  const SliderModal = () => (
    <StyledSliderWrapper>
      <Slider {...config.genreSettings}>
        {selectedGenre.genresArray.map((genre) => (
          <SliderButton
            key={genre.id}
            onClick={() => {
              scrollTo();
              setSelectedGenre((selected) => {
                return {
                  ...selected,
                  id: genre.id,
                  name: genre.name,
                };
              });
            }}
          >
            {genre.name}
          </SliderButton>
        ))}
      </Slider>
    </StyledSliderWrapper>
  );

  const Layout = () => (
    <>
      <NavBar />
      <SliderModal />
      <p>Showing results for: {selectedGenre.name}</p>
    </>
  );

  const { data, error, status } = useQuery(
    ['fetch genre movies', APIKey, selectedGenre.id, pageState],
    () =>
      type === 'movies'
        ? fetchData(
          `${baseUrl}/discover/movie?api_key=${APIKey}&language=en-US&sort_by=popularity.desc&with_genres=${selectedGenre.id}&page=${pageState}`
        )
        : fetchData(
          `${baseUrl}/discover/tv?api_key=${APIKey}&language=en-US&sort_by=popularity.desc&with_genres=${selectedGenre.id}&page=${pageState}`
        )
  );

  handleError(status, error);

  if (status === 'loading')
    return (
      <>
        <Layout />
        <ContentLoader />
      </>
    );

  const { total_pages: pages }: PageProps = data;

  return (
    <>
      <MetaData title={'Discover Movies'} />
      <Layout />
      <MovieCards
        type={selectedGenre.type}
        data={data.results}
        favorites={favorites}
        dispatchFavorites={dispatchFavorites}
      />
      <PaginationWrapper>
        <Pagination pages={pages} pageState={pageState} dispatch={dispatch} />
      </PaginationWrapper>
    </>
  );
};

export default Discover;
