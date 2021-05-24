import { useQuery } from 'react-query';

// import PageHead from '~/components/Head'; use react-helmet
import { themes } from '../styles/themes';
import { fetchData } from '../utils/fetchData';
import { APIKey, baseUrl } from '../utils/config';
import FeaturedMovie from '../components/Featured/index';
import { GiConsoleController } from 'react-icons/gi';
// import DiscoverGenres from '~/components/DiscoverGenres';
// import DiscoverCategories from '~/components/DiscoverCategories';

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
  if (nowPlayingLoading || trendingLoading)
    return <h2>Loading...Please Wait!</h2>;

  const randomFeaturedMovie = Math.floor(Math.random() * 19);
  const featured = trending.results.filter(
    (movie, index) => index === randomFeaturedMovie
  );

  return (
    <>
      <main>
        <FeaturedMovie movie={featured} />
        {/* <DiscoverCategories category="Now Playing" data={nowPlaying.results} /> */}
        {/* <DiscoverCategories category="Trending" data={trending.results} /> */}
        {/* <DiscoverGenres /> */}
      </main>
    </>
  );
};

export default Homepage;
