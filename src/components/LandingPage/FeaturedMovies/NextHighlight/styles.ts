import styled from 'styled-components';
import { themes } from 'styles/themes';

interface Props {
  moviePoster: string | null;
}
export const NextHighlightWrapper = styled.div<Props>`
  position: absolute;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  height: 16rem;
>>>>>>> 1fd3d65 (styling improvements)
=======
>>>>>>> 7a5d32b (final commit)
=======
>>>>>>> d7ea6f6e37cd3f5ff2264ea803e53a26791d4084
  width: 28rem;
  height: 16rem;
  bottom: 0;
  right: 0;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url(${(props) => props.moviePoster});
  background-size: cover;
  transition: background ease-in 500ms;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7a5d32b (final commit)
=======
>>>>>>> d7ea6f6e37cd3f5ff2264ea803e53a26791d4084
  @media (min-width: ${themes.breakpoints.md}) and (max-width: ${themes
  .breakpoints.lg}) {
    width: 30vw;
    height: 18vh;
  }

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1fd3d65 (styling improvements)
=======
>>>>>>> 7a5d32b (final commit)
=======
>>>>>>> d7ea6f6e37cd3f5ff2264ea803e53a26791d4084
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7a5d32b (final commit)
=======
>>>>>>> d7ea6f6e37cd3f5ff2264ea803e53a26791d4084
    @media (min-width: ${themes.breakpoints.md}) and (max-width: ${themes
  .breakpoints.lg}) {
    top: 35%;
    height: auto;
    }

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1fd3d65 (styling improvements)
=======
>>>>>>> 7a5d32b (final commit)
=======
>>>>>>> d7ea6f6e37cd3f5ff2264ea803e53a26791d4084
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
