import { useQuery } from 'react-query';
import MainLoader from 'components/Loader';

import { fetchData } from 'utils/fetchData';
import { APIKey, baseUrl } from 'utils/config';
import FeaturedMovie from 'components/Featured/index';
import DiscoverGenres from 'components/Discover/Genres/index';
import DiscoverCategories from 'components/Discover/Categories/index';

const Homepage = () => {
  const {
    isLoading: nowPlayingLoading,
    isError: nowPlayingError,
    data: nowPlaying,
    error: nowPlayingErrMsg,
  } = useQuery(['nowPlaying', APIKey], () =>
    fetchData(
      `${baseUrl}/movie/now_playing?api_key=${APIKey}&language=en-US&page=1`
    )
  );

  const {
    isLoading: trendingLoading,
    isError: trendingError,
    data: trending,
    error: trendingErrMsg,
  } = useQuery(['trending', APIKey], () =>
    fetchData(
      `${baseUrl}/movie/popular?api_key=${APIKey}&language=en-US&page=1`
    )
  );

  if (nowPlayingError) throw nowPlayingErrMsg.message;
  if (trendingError) throw trendingErrMsg.message;
  if (nowPlayingLoading || trendingLoading) return <MainLoader />;

  const randomFeaturedMovie = Math.floor(Math.random() * 19);
  const featured = trending.results.filter(
    (movie, index) => index === randomFeaturedMovie
  );

  return (
    <>
      <main>
        <FeaturedMovie movie={featured} />
        <DiscoverCategories category="Now Playing" data={nowPlaying.results} />
        <DiscoverCategories category="Trending" data={trending.results} />
        <DiscoverGenres />
      </main>
    </>
  );
};

export default Homepage;
