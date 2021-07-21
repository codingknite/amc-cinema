import styled from 'styled-components';
import { themes } from 'styles/themes';

interface Props {
  moviePoster: string | null;
}
export const NextHighlightWrapper = styled.div<Props>`
  position: absolute;
  height: 16rem;
  width: 28rem;
  bottom: 0;
  right: 0;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url(${(props) => props.moviePoster});
  background-size: cover;
  transition: background ease-in 500ms;

  @media (max-width: ${themes.breakpoints.md}) {
    display: none;
  }

  .next-wrapper {
    position: relative;
    right: 8rem;
    top: 45%;
    display: flex;
    flex-direction: column;
    width: 8rem;
    height: 9rem;
    overflow: hidden;

    .movie-title {
      font-size: 1.2rem;
      font-weight: bold;
    }
    div {
      width: 6.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
