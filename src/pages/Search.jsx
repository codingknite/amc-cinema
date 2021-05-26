import { useQuery } from 'react-query';
import { useState, useEffect, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import MovieCards from 'components/MovieCards';
import { themes } from 'styles/themes';
import { fetchData } from 'utils/fetchData';
import { useFavorite } from 'context/useFavorites';
import { APIKey, baseUrl } from 'utils/config';

const SearchSection = styled.section`
  width: 100%;
  height: 10rem;
  margin-top: 8rem;

  input {
    width: 40rem;
    padding: 1rem;
    margin: 3rem;
    border-top: none;
    border-left: none;
    border-right: none;
    background: none;
    outline: none;
    color: white;
    border-radius: 1px;
    border-bottom: 5px solid white;

    &:focus {
      font-size: 2rem;
    }

    &::placeholder {
      color: white;
      font-size: 2rem;
    }
  }
`;

const SearchTag = styled.section`
  .results-tag {
    font-size: 1.2rem;
    padding: 1.5rem;
  }

  .search-input {
    margin-left: 3rem;
    font-size: 2.5rem;
  }
`;

const SearchResults = styled.section`
  h2 {
    font-size: 2.5rem;
    margin-left: 2rem;
  }
`;

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const { favorites, dispatchFavorites } = useFavorite();
  const inputElement = useRef(null);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  const handleChange = (e) => setSearchInput(e.target.value);

  const { data, isLoading, isError, error } = useQuery(
    ['search movie', searchInput, APIKey],
    () =>
      fetchData(
        `${baseUrl}/search/movie?api_key=${APIKey}&language=en-US&page=1&include_adult=false&query=${
          searchInput && searchInput
        }`
      )
  );

  let filteredMovies;
  if (isError) throw error.message;
  if (!isLoading) filteredMovies = data.results.filter((m) => m.poster_path);

  return (
    <>
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
        {!searchInput ? null : isLoading ? (
          <h3>Loading...</h3>
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
