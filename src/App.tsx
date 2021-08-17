import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Search from 'routes/Search';
import Bookings from 'routes/Bookings';
import Homepage from 'routes/Homepage';
import { themes } from 'styles/themes';
import BookMovie from 'routes/BookMovie';
import Biography from 'routes/Biography';
import Favorites from 'routes/Favorites';
import NotFound from 'components/notFound';
import SerieDetails from 'routes/SerieDetails';
import MovieDetails from 'routes/MovieDetails';
import DiscoverMovies from 'routes/DiscoverMovies';
import DiscoverSeries from 'routes/DiscoverSeries';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: #000;
    color: ${themes.colors.white};
	  font-family: 'Open Sans'

  };
`;

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/my-bookings" element={<Bookings />} />
        <Route path={'/movies'} element={<DiscoverMovies />} />
        <Route path={'/series'} element={<DiscoverSeries />} />
        <Route path="movie/:movieId" element={<MovieDetails />} />
        <Route path="serie/:serieId" element={<SerieDetails />} />
        <Route path={'/booking/:movieId'} element={<BookMovie />} />
        <Route path="/biography/:personId" element={<Biography />} />
      </Routes>
    </>
  );
};

export default App;
