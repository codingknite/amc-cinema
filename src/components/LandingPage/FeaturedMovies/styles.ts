import styled from 'styled-components';
import { themes } from 'styles/themes';

interface MovieWrapperProps {
  posterPath?: string;
}

export const MovieWrapper = styled.div<MovieWrapperProps>`
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${(props) => props.posterPath});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 45rem;
  width: 100%;
  transition: background ease-in 1s;
  position: relative;

  @media (max-width: ${themes.breakpoints.mdsm}) {
    min-height: 35rem;
    background-position: center;
  }

  @media (max-width: ${themes.breakpoints.md}) {

  .stats {
    margin-left: 2rem;
    font-size: ${themes.fontSizes.xl};
    font-family: 'Rubik';
  }

  .rating {
    display: flex;
    margin-left: 2rem;
    align-items: center;
    font-family: 'Rubik';

    p {
      margin-left: 0.5rem;
      font-size: ${themes.fontSizes.xl};
    }
  }

  @media (max-width: ${themes.breakpoints.sm}) {
    padding: 1.8rem;

    .stats {
      margin-left: 1rem;
    }
  }

  @media (max-width: ${themes.breakpoints.xsm}) {
    padding: 1rem;

    .stats {
      margin-left: 1rem;
      font-size: ${themes.fontSizes.md};
    }
    .rating {
      p {
        font-size: ${themes.fontSizes.md};
      }
    }
  }
`;

export const MovieInfo = styled.div`
  margin: 4rem;

  .title {
    width: 80%;
    font-family: 'Rubik';
    font-size: 4rem;
    margin: 0 0 1rem 0;
  }

  .overview {
    width: 50%;
    margin: 2rem 0 2rem 0;
    padding: 1rem;
    font-size: ${themes.fontSizes.xl};
    text-align: justify;
  }

  .buttons {
    display: flex;
    margin-top: 2rem;
    padding: 2rem;

    p {
      margin-left: 0.5rem;
    }
  }

  @media (max-width: ${themes.breakpoints.md}) {
    margin: 2rem;
    height: 32rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .title {
      font-size: 3rem;
      margin: 0 0 0.5rem 0;
    }
    .overview {
      width: 100%;
      margin: 1rem 0 1rem 0;
      font-size: ${themes.fontSizes.lg};
    }
  }

  @media (max-width: ${themes.breakpoints.sm}) {
    margin: 0.5rem;

    .title {
      width: 100%;
      font-size: 2rem;
    }
    .overview {
      width: 100%;
    }
    .buttons {
      padding: 0rem;
    }
  }
`;
