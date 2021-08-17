import styled from 'styled-components';
import { themes } from 'styles/themes';
import { Header } from 'components/LandingPage/LatestMovies/styles';

export const Wrapper = styled.section`
  margin-top: 0rem;

  @media (max-width: ${themes.breakpoints.sm}) {
    margin-top: 0rem;
  }
`;

export const StyledHeader = styled(Header)`
  color: #adb5bd;
  margin: 10rem 0 2.5rem 5rem;

  @media (max-width: ${themes.breakpoints.sm}) {
    font-size: 2.3rem;
    font-weight: bold;
    margin: 5rem 1rem 0rem 1rem;
  }
`;

export const MovieContainer = styled.div`
  width: 60rem;
  min-height: 350px;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding: 0.5rem;
  margin-bottom: 2rem;

  img {
    height: 350px;
  }

  @media (max-width: ${themes.breakpoints.md}) {
    padding-left: 2rem;
  }

  @media (max-width: ${themes.breakpoints.sm}) {
    width: 100%;
    padding-left: 0rem;
    margin-bottom: 0.5rem;
    justify-content: flex-start;

    img {
      display: none;
    }
  }
`;

export const MovieInfo = styled.div`
  width: 60rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 2rem;

  @media (max-width: ${themes.breakpoints.sm}) {
    width: 100%;
    justify-content: space-evenly;
    margin-left: 0rem;
  }
`;

export const MovieHeader = styled.div`
  padding: 0.5rem;
  h2 {
    font-size: 2rem;
  }

  h3 {
    font-family: 'Kaushan Script', cursive;
    font-size: 1.5rem;
    font-weight: 300;
    font-style: italic;
  }

  @media (max-width: ${themes.breakpoints.sm}) {
    h2 {
      font-size: 1.8rem;
    }

    h3 {
      font-size: 1.3rem;
    }
  }
`;

export const RatingInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;

  p {
    font-size: 0.9375rem;
  }

  .release-date {
    margin-left: 1.5rem;
  }

  .runtime {
    display: flex;
    align-items: center;
    margin-left: 1.5rem;

    p {
      margin-left: 0.4rem;
    }
  }

  @media (max-width: ${themes.breakpoints.sm}) {
    flex-wrap: wrap;
  }
`;

export const GenreInfo = styled.div`
  display: flex;
  padding: 0.5rem;

  div {
    display: flex;
    align-items: center;
    margin-right: 1rem;

    p {
      margin-left: 0.3rem;
      font-size: 15px;
    }
  }

  @media (max-width: ${themes.breakpoints.sm}) {
    flex-wrap: wrap;
    line-height: 1.8rem;
  }
`;

export const Overview = styled.div`
  width: 90%;
  padding: 0.5rem;
  text-align: justify;

  p {
    margin-bottom: 1rem;
  }

  @media (max-width: ${themes.breakpoints.sm}) {
    text-align: left;
  }
`;

export const Buttons = styled.div`
  padding: 0.5rem;
  display: flex;

  @media (max-width: ${themes.breakpoints.sm}) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Button = styled.button`
  width: 7rem;
  border: none;
  padding: 0.8rem;
  cursor: pointer;
  border-radius: 2rem;
  font-size: 0.875rem;
  color: ${themes.colors.white};
  background: ${themes.colors.heartRed};

  @media (max-width: ${themes.breakpoints.sm}) {
  }
`;
