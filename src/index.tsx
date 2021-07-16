import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App';
import { BookingsProvider } from 'context/useBookings';
import { FavoritesProvider } from 'context/useFavorites';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <BookingsProvider>
      <FavoritesProvider>
        <QueryClientProvider client={queryClient}>
          <Router>
            <App />
          </Router>
        </QueryClientProvider>
      </FavoritesProvider>
    </BookingsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
