import dayjs from 'dayjs';
import Lazyload from 'react-lazyload';
import { RiRadioButtonFill } from 'react-icons/ri';
import { BsFillCameraVideoFill } from 'react-icons/bs';

import * as Styles from './styles';
import Rating from 'components/Rating';
import { posterUrl } from 'utils/config';
import useFetchAll from 'hooks/useFetchAll';
import { useFavorite } from 'context/useFavorites';
import { MainLoader } from 'components/Loaders';
import { StyledLinkButton } from 'components/common/LinkButton';

const FavoriteMovies = () => {
  const { dispatchFavorites, favorites } = useFavorite();
  const { data, error, loading } = useFetchAll(favorites);

  if (error) throw error;
  if (loading) return <MainLoader />;

  return (
    <Styles.Wrapper>
      <Styles.StyledHeader>My Favourites</Styles.StyledHeader>
      {data.reverse().map((movie, index) => (
        <Styles.MovieContainer key={index}>
          <Lazyload height={200}>
            <img
              src={posterUrl + movie.poster_path}
              alt={movie.title}
              className="poster"
            />
          </Lazyload>
          <Styles.MovieInfo>
            <Styles.MovieHeader>
              <h2>{movie.title}</h2>
              <h3>{movie.tagline}</h3>
            </Styles.MovieHeader>

            <Styles.RatingInfo>
              <Rating initialRating={Math.round(movie.vote_average / 2)} />
              <p className="release-date">
                {dayjs(movie.release_date).format('MMMM, YYYY')}
              </p>
              <div className="runtime">
                <BsFillCameraVideoFill />
                <p>{movie.runtime} Mins</p>
              </div>
            </Styles.RatingInfo>

            <Styles.GenreInfo>
              {movie.genres.map((genre) => (
                <div key={genre.id}>
                  <RiRadioButtonFill color="gray" />
                  <p>{genre.name}</p>
                </div>
              ))}
            </Styles.GenreInfo>
            <Styles.Overview>
              <p>{movie.overview}</p>
            </Styles.Overview>
            <Styles.Buttons>
              <StyledLinkButton
                to={`/movie/${movie.id}`}
                className="learn-more-btn"
              >
                Learn More
              </StyledLinkButton>
              <Styles.Button
                onClick={() =>
                  dispatchFavorites({ type: 'favorite', payload: movie.id })
                }
              >
                Delete
              </Styles.Button>
            </Styles.Buttons>
          </Styles.MovieInfo>
        </Styles.MovieContainer>
      ))}
    </Styles.Wrapper>
  );
};

export default FavoriteMovies;
