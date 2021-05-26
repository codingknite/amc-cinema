import { Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Search from 'pages/Search';
import Bookings from 'pages/Bookings';
import Homepage from 'pages/Homepage';
import Biography from 'pages/Biography';
import Favorites from 'pages/Favorites';
import { themes } from 'styles/themes';

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
        <Route path="/" exact element={<Homepage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/my-bookings" element={<Bookings />} />
        <Route path="/biography/:personId" element={<Biography />} />
        <Route path="/search" exact element={<Search />} />
      </Routes>
    </>
  );
};

export default App;
