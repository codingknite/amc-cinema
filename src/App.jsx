import { Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Search from 'pages/Search';
import Discover from 'pages/Discover';
import Bookings from 'pages/Bookings';
import Homepage from 'pages/Homepage';
import { themes } from 'styles/themes';
import BookMovie from 'pages/BookMovie';
import Biography from 'pages/Biography';
import Favorites from 'pages/Favorites';
import NotFound from 'components/notFound';
import MovieDetails from 'pages/MovieDetails';
import DiscoverGenres from 'pages/DiscoverGenres';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: #0a0908;
    color: ${themes.colors.white};
	  font-family: 'Open Sans'
  };
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/search" element={<Search />} />
        <Route path="/my-bookings" element={<Bookings />} />
        <Route path="movie/:movieId" element={<MovieDetails />} />
        <Route path={'/booking/:movieId'} element={<BookMovie />} />
        <Route path="/biography/:personId" element={<Biography />} />
        <Route path={'/discover/:category'} element={<Discover />} />
        <Route path={'/genres/:genre'} element={<DiscoverGenres />} />
      </Routes>
    </>
  );
};

export default App;
