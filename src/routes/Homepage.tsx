import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';

import * as config from 'utils/config';
import fetchData from 'utils/fetchData';
import MetaData from 'components/MetaData';
import handleError from 'utils/handleError';
import NavBar from 'components/NavBar/index';
import { MainLoader } from 'components/Loaders';
import FeaturedMovies from 'components/LandingPage/FeaturedMovies/index';
import BrowseGenres from 'components/LandingPage/BrowseGenres/index';
import LatestMovies from 'components/LandingPage/LatestMovies/index';

const Higlights = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6.5rem;
`;

const Homepage = (): JSX.Element => {
  const {
    status: featuredStatus,
    data: featuredMovies,
    error: featuredError,
  } = useQuery(
    'featured movies',
    async () => {
      const fetchedData = await fetchData(`${config.amcApiUrl}/featured`);
      return fetchedData;
    },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 3600 * 12,
    }
  );

  const {
    status: nowPlayingStatus,
    data: nowPlaying,
    error: nowPlayingError,
  } = useQuery('now playing', async () => {
    const fetchedData = await fetchData(`${config.amcApiUrl}/now-playing`);
    return fetchedData;
  });

  const {
    status: upcomingStatus,
    data: upcoming,
    error: upcomingError,
  } = useQuery(['upcoming'], async () => {
    const fetchedData = await fetchData(`${config.amcApiUrl}/coming-soon`);
    return fetchedData;
  });

  handleError(featuredStatus, featuredError);
  handleError(nowPlayingStatus, nowPlayingError);
  handleError(upcomingStatus, upcomingError);

  return (
    <>
      <MetaData title="AMC Cinema - Home" />
      <NavBar />
      <main>
        {featuredStatus !== 'loading' &&
        nowPlayingStatus !== 'loading' &&
        upcomingStatus !== 'loading' ? (
            <Higlights>
              <FeaturedMovies moviesData={featuredMovies} />
              <LatestMovies
                category="In Cinemas This Week"
                data={nowPlaying.data}
              />
              <LatestMovies category="Coming Soon" data={upcoming.data} />
            </Higlights>
          ) : (
            <MainLoader />
          )}
        <BrowseGenres />
      </main>
    </>
  );
};

export default Homepage;
