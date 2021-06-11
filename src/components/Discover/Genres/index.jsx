/* eslint-disable react/react-in-jsx-scope */
import Slider from 'react-slick';
import { useState } from 'react';
import { useQuery } from 'react-query';
import 'slick-carousel/slick/slick.css';
import { scroller, Element } from 'react-scroll';

import * as Styles from './styles';
import * as config from 'utils/config';
import generateSlug from 'utils/generateSlug';
import MovieCards from 'components/MovieCards/index';
import { genres } from 'data/categories';
import { fetchData } from 'utils/fetchData';
import { ContentLoader } from 'components/Loaders';
import { useFavorite } from 'context/useFavorites';
import { Header } from 'components/Discover/Categories/styles';
import { StyledLinkButton } from 'components/common/LinkButton';

const BrowseGenres = () => {
  const { favorites, dispatchFavorites } = useFavorite();
  const [selectedGenre, setSelectedGenre] = useState(config.initObject);

  const scrollTo = () =>
    scroller.scrollTo('scrollelement2', {
      duration: 1500,
      smooth: 'easeInOutQuard',
      offset: -50,
    });

  const {
    isLoading: loading,
    isError: error,
    data,
    error: errorMessage,
  } = useQuery(['discover genre', config.APIKey, selectedGenre.id], () =>
    fetchData(
      `${config.baseUrl}/discover/movie?api_key=${config.APIKey}&language=en-US&with_genres=${selectedGenre.id}&page=1`
    )
  );

  let discoveredMovies;
  if (error) throw errorMessage.message;
  if (!loading) discoveredMovies = data.results.slice(0, 12);

  return (
    <Styles.MainWrapper>
      <Header>Movies</Header>
      <Element name="scrollelement2"></Element>
      <Styles.SliderWrapper>
        <Slider {...config.genreSettings}>
          {genres.map((genre) => (
            <Styles.SliderButton
              className="card"
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
            </Styles.SliderButton>
          ))}
        </Slider>
      </Styles.SliderWrapper>

      {loading ? (
        <ContentLoader />
      ) : (
        <MovieCards
          data={discoveredMovies}
          favorites={favorites}
          dispatchFavorites={dispatchFavorites}
        />
      )}
      <StyledLinkButton
        to={`genres/${generateSlug(selectedGenre.name)}`}
        width="7rem"
        flexEnd={true}
        marginBottom="2rem"
      >
        See All
      </StyledLinkButton>
    </Styles.MainWrapper>
  );
};

export default BrowseGenres;
