import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Search from 'pages/Search';
import Bookings from 'pages/Bookings';
import Homepage from 'pages/Homepage';
import { themes } from 'styles/themes';
import BookMovie from 'pages/BookMovie';
import Biography from 'pages/Biography';
import Favorites from 'pages/Favorites';
import NotFound from 'components/notFound';
import SerieDetails from 'pages/SerieDetails';
import MovieDetails from 'pages/MovieDetails';
import DiscoverMovies from 'pages/DiscoverMovies';
import DiscoverSeries from 'pages/DiscoverSeries';

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
