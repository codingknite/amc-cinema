import { useQuery } from 'react-query';
import styled from 'styled-components';
import React, { useState, useEffect, useRef } from 'react';

import { themes } from 'styles/themes';
import { MovieResults } from 'types/types';
import MetaData from 'components/MetaData';
import fetchData from 'utils/fetchData';
import NavBar from 'components/NavBar/index';
import { APIKey, baseUrl } from 'utils/config';
import MovieCards from 'components/MovieCards';
import { useFavorite } from 'context/useFavorites';
import { ContentLoader } from 'components/Loaders';
import handleError from 'utils/handleError';

const SearchSection = styled.section`
  height: 10rem;
  margin-top: 6.5rem;
  padding-top: 5rem;
  padding-left: 3.5rem;

  @media (max-width: ${themes.breakpoints.sm}) {
    height: 6rem;
    margin-top: 4rem;
    padding-top: 3rem;
    padding-left: 1rem;
  }

  input {
    width: 30%;
    outline: none;
    color: white;
    font-size: 2rem;
    background: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 1px;
    border-bottom: 5px solid white;

    &:focus {
      font-size: 2rem;
    }

    &::placeholder {
      color: white;
      font-size: 2rem;
    }

    @media (max-width: ${themes.breakpoints.sm}) {
      width: 90%;
      background: none;
      font-size: 1.5rem;
      border-radius: 1px;
      border-bottom: 3px solid white;

      &:focus {
        font-size: 1.5rem;
      }

      &::placeholder {
        color: white;
        font-size: 1.5rem;
      }
    }
  }
`;

const SearchTag = styled.section`
  .results-tag {
    font-size: 1.2rem;
    padding: 1.5rem;

    @media (max-width: ${themes.breakpoints.sm}) {
      padding: 0 1rem 0;
    }
  }

  .search-input {
    margin-left: 3rem;
    font-size: 1.5rem;
  }
`;

const SearchResults = styled.section`
  h2 {
    font-size: 2.5rem;
    margin-left: 2rem;
  }
`;

const Search = (): JSX.Element => {
  const [searchInput, setSearchInput] = useState('');
  const { favorites, dispatchFavorites } = useFavorite();
  const inputElement = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchInput(e.target.value);
  const { status, data, error } = useQuery(
    ['search movie', searchInput, APIKey],
    () =>
      fetchData(
        `${baseUrl}/search/movie?api_key=${APIKey}&language=en-US&page=1&include_adult=false&query=${
          searchInput ? searchInput : '%27%27'
        }`
      )
  );

  handleError(status, error);

  let filteredMovies;
  if (status !== 'loading')
    filteredMovies = data.results.filter((m: MovieResults) => m.poster_path);

  return (
    <>
      <MetaData title="Twilight | Search Movies" />
      <NavBar />
      <SearchSection>
        <input
          type="text"
          placeholder="Find your favorite movies"
          onChange={handleChange}
          autoFocus
          ref={inputElement}
        />
      </SearchSection>

      <SearchTag>
        {searchInput ? (
          <>
            <p className="results-tag">Results for </p>
            <p className="search-input">{searchInput}</p>{' '}
          </>
        ) : null}
      </SearchTag>

      <SearchResults>
        {!searchInput ? null : status === 'loading' ? (
          <ContentLoader />
        ) : (
          <MovieCards
            data={filteredMovies}
            favorites={favorites}
            dispatchFavorites={dispatchFavorites}
          />
        )}
      </SearchResults>
    </>
  );
};

export default Search;
