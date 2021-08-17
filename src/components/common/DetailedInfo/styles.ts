import styled from 'styled-components';
import { themes } from 'styles/themes';

interface OverviewProps {
  topMargin?: string;
}

export const DetailsWrapper = styled.section`
  display: flex;
  margin-top: 8rem;
  flex-direction: column;
`;

export const HeaderDetails = styled.div`
  display: flex;
  width: 70rem;
  padding: 1rem;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${themes.breakpoints.md}) {
    width: 100%;
    padding: 0.5rem;
    flex-direction: column;
    align-items: center;
  }
`;

export const MoviePoster = styled.div`
  img {
    height: 34.375rem;
    border-radius: 0.3125rem;

    @media (max-width: ${themes.breakpoints.md}) {
      height: 31.25rem;
    }

    @media (max-width: ${themes.breakpoints.sm}) {
      height: 28.125rem;
    }

    @media (max-width: ${themes.breakpoints.xsm}) {
      height: 23.75rem;
    }
  }
`;

export const MovieDetails = styled.div`
  width: 60%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 2rem;

  @media (max-width: ${themes.breakpoints.md}) {
    width: 90%;
    margin-left: 0rem;
    margin-top: 1rem;
  }

  @media (max-width: ${themes.breakpoints.sm}) {
    width: 100%;
    margin-left: 0rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  font-family: 'Rubik';
  margin-bottom: 0.5rem;

  @media (max-width: ${themes.breakpoints.sm}) {
    font-size: 2.5rem;
    text-align: center;
  }

  @media (max-width: ${themes.breakpoints.xsm}) {
    font-size: 2rem;
  }
`;

export const Tagline = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  font-family: 'Kaushan Script', cursive;

  @media (max-width: ${themes.breakpoints.sm}) {
    font-size: 1.5rem;
    text-align: center;
  }

  @media (max-width: ${themes.breakpoints.xsm}) {
    font-size: 1.3rem;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9375rem;
  margin-bottom: 0.5rem;

  .language {
    margin-left: 4rem;
  }

  @media (max-width: ${themes.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    margin: 1rem 0rem 1rem 0rem;

    .language {
      margin-top: 0.5rem;
      margin-left: 0rem;
    }
  }
`;

export const GenresWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9375rem;
  margin-bottom: 0.5rem;

  @media (max-width: ${themes.breakpoints.sm}) {
    flex-wrap: wrap;
    align-items: flex-start;
    line-height: 1.8rem;
  }
`;

export const Genres = styled.div`
  display: flex;
  margin-right: 1rem;
`;

export const GenreIcon = styled.p`
  margin-right: 0.2rem;
`;

export const StyledOverview = styled.div<OverviewProps>`
  h2 {
    font-family: 'Rubik';
    margin-bottom: 0.5rem;
    margin-top: ${(props) => (props.topMargin ? props.topMargin : '0rem')};
  }

  p {
    text-align: justify;

    @media (max-width: ${themes.breakpoints.md}) {
      text-align: left;
    }
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;
  padding: 1rem;

  @media (max-width: ${themes.breakpoints.sm}) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const WebLinks = styled.a`
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7a5d32b (final commit)
=======
>>>>>>> d7ea6f6e37cd3f5ff2264ea803e53a26791d4084
  width: 9rem;
  padding: 0.8rem;
  border-radius: 2rem;
  text-align: center;
  text-decoration: none;
  color: ${themes.colors.white};
  background-color: ${themes.colors.heartRed};
<<<<<<< HEAD
<<<<<<< HEAD
=======
  padding: 0.8rem;
  border-radius: 2rem;
  text-decoration: none;
  color: ${themes.colors.white};
  background-color: ${themes.colors.heartRed};
  width: 9rem;
  text-align: center;
>>>>>>> d09ab8c (create details component)
=======
>>>>>>> 7a5d32b (final commit)
=======
>>>>>>> d7ea6f6e37cd3f5ff2264ea803e53a26791d4084

  @media (max-width: ${themes.breakpoints.sm}) {
    margin: 0 0.5rem 1rem 0;
  }
`;

export const Details = styled.section`
  width: 70rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 4rem;

  h2 {
    font-size: 3rem;
  }

  @media (max-width: ${themes.breakpoints.lg}) {
    width: 60rem;
    padding: 2rem;
  }

  @media (max-width: ${themes.breakpoints.md}) {
    display: none;
  }
`;
