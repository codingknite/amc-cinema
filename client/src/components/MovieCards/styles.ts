import styled from 'styled-components';
import { themes } from 'styles/themes';

interface Props {
  imageLoaded: boolean;
}

export const CardsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: ${themes.breakpoints.lg}) {
    justify-content: center;
  }
`;

export const MovieCard = styled.div`
  margin: 1rem;
  width: 250px;

  &:hover {
    transition: ease-in-out 500ms;
    transform: scale(1.03);
  }

  @media (min-width: 361px) and (max-width: ${themes.breakpoints.sm}) {
    width: 155px;
  }
  @media (min-width: 481px) and (max-width: ${themes.breakpoints.mdsm}) {
    width: 200px;
  }
`;

export const PosterWrapper = styled.div`
  text-align: center;
  cursor: pointer;
`;

export const MoviePoster = styled.img<Props>`
  width: 100%;
  height: 400px;
  border-radius: 0.8rem;
  color: ${themes.colors.white};
  background: ${(props) =>
    props.imageLoaded
      ? 'none'
      : 'linear-gradient(-45deg, black, #6c757d, black, #6c757d)'};
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media (min-width: 361px) and (max-width: ${themes.breakpoints.sm}) {
    height: 250px;
    border-radius: 0.4rem;
  }

  @media (min-width: 481px) and (max-width: ${themes.breakpoints.mdsm}) {
    height: 300px;
    border-radius: 0.4rem;
  }
`;

export const Title = styled.p`
  font-size: ${themes.fontSizes.md};
  font-weight: 400;
  margin-top: 0.5rem;
  color: ${themes.colors.white};
`;

export const MovieInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MovieRating = styled.div`
  padding: 0.5rem;
  size: 0.5em;
`;

export const LikeMovie = styled(MovieRating)`
  cursor: pointer;
`;
