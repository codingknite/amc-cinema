import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { FavoritesProvider } from './context/useFavorites';


const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <FavoritesProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <App />
        </Router>
      </QueryClientProvider>
    </FavoritesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
