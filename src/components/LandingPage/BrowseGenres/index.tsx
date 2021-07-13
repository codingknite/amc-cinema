import React, { useState} from 'react';
import Slider from 'react-slick';
import { useQuery } from 'react-query';
import 'slick-carousel/slick/slick.css';
import { scroller, Element } from 'react-scroll';
import { BiCameraMovie } from 'react-icons/bi';

import * as Styles from './styles';
import * as config from 'utils/config';
import MovieCards from 'components/MovieCards/index';
import { genres } from 'data/categories';
import fetchData  from 'utils/fetchData';
import { ContentLoader } from 'components/Loaders';
import { useFavorite } from 'context/useFavorites';
import handleError from 'utils/handleError';

interface GenresArray {
  id: number;
  name: string;
  movies: boolean;
  series: boolean;
}
interface InitialState {
  type: string;
  name: string;
  id: number;
  genresArray: GenresArray[];
  selected: boolean;
}

const BrowseGenres = (): JSX.Element => {
  const movieGenres: GenresArray[] = genres.filter((genre) => genre.movies);
  const seriesGenres: GenresArray[] = genres.filter((genre) => genre.series);

  const initObject: InitialState = {
    type: 'movies',
    name: 'science-fiction',
    id: 878,
    genresArray: movieGenres,
    selected: false,
  };
  const { favorites, dispatchFavorites } = useFavorite();
  const [selectedGenre, setSelectedGenre] = useState(initObject);

  const scrollTo = () =>
    scroller.scrollTo('scrollelement2', {
      duration: 1500,
      smooth: 'easeInOutQuard',
      offset: -50,
    });

  const {
    status,
    data,
    error: errorMessage,
  } = useQuery(['discover genre', config.APIKey, selectedGenre.id], () => {
    return selectedGenre.type === 'movies'
      ? fetchData(
        `${config.baseUrl}/discover/movie?api_key=${config.APIKey}&language=en-US&with_genres=${selectedGenre.id}&page=1`
      )
      : fetchData(
        `${config.baseUrl}/discover/tv?api_key=${config.APIKey}&language=en-US&with_genres=${selectedGenre.id}&page=1`
      );
  });

  const handleMoviesClick = () => {
    setSelectedGenre(() => {
      return {
        ...selectedGenre,
        type: 'movies',
        name: 'science-fiction',
        id: 878,
        genresArray: movieGenres,
      };
    });
  };

  const handleSeriesClick = () => {
    setSelectedGenre(() => {
      return {
        ...selectedGenre,
        type: 'series',
        id: 10765,
        name: 'Sci-Fi & Fantasy',
        genresArray: seriesGenres,
      };
    });
  };

  handleError(status, errorMessage);

  return (
    <Styles.MainWrapper>
      <Styles.TypeSelection>
        <div
          className={
            selectedGenre.type === 'movies' ? 'movies active' : 'movies'
          }
          onClick={handleMoviesClick}
        >
          <BiCameraMovie />
          Movies
        </div>
        <div
          className={
            selectedGenre.type === 'series' ? 'series active' : 'series'
          }
          onClick={handleSeriesClick}
        >
          <BiCameraMovie />
          Series
        </div>
      </Styles.TypeSelection>
      <Element name="scrollelement2"></Element>
      <Styles.SliderWrapper>
        <Slider {...config.genreSettings}>
          {selectedGenre.genresArray.map((genre) => (
            <Styles.SliderButton
              key={genre.id}
              className={
                genre.id === 10749 || genre.id === 878
                  ? 'card-selected'
                  : 'card-default'
              }
              onClick={() => {
                scrollTo();
                setSelectedGenre((selected) => {
                  return {
                    ...selected,
                    id: genre.id,
                    name: genre.name,
                    selected: true,
                  };
                });
              }}
            >
              {genre.name}
            </Styles.SliderButton>
          ))}
        </Slider>
      </Styles.SliderWrapper>
      <p>Showing results for: {selectedGenre.name}</p>
      {status === 'loading' ? (
        <ContentLoader />
      ) : (
        <MovieCards
          type={selectedGenre.type}
          data={data.results}
          favorites={favorites}
          dispatchFavorites={dispatchFavorites}
        />
      )}
    </Styles.MainWrapper>
  );
};

export default BrowseGenres;
