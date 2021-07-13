import styled from 'styled-components';

interface Props {
  moviePoster: string | null;
}
export const NextHighlightWrapper = styled.div<Props>`
  position: absolute;
  background: blue;
  height: 16rem;
  width: 28rem;
  bottom: 0;
  right: 0;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url(${(props) => props.moviePoster});
  background-size: cover;
  transition: background ease-in 1s;

  .next-wrapper {
    position: relative;
    right: 8rem;
    top: 45%;
    display: flex;
    flex-direction: column;
    width: 8rem;
    div {
      display: flex;
      align-items: center;
      width: 6.5rem;
    }
  }
`;
