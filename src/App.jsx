import { Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Homepage from './pages/Homepage';
import { themes } from './styles/themes';

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
        <Route to="/" element={<Homepage />} />
      </Routes>
    </>
  );
};

export default App;
