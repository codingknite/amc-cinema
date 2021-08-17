import styled from 'styled-components';
import { themes } from 'styles/themes';
import { Title, HeaderDetails } from 'components/Movie/Details/styles';

export const MainWrapper = styled.section`
  margin-top: 6.5rem;
`;

export const BioSection = styled(HeaderDetails)`
  .not-found {
    max-width: 35%;

    @media (max-width: ${themes.breakpoints.md}) {
      width: 50%;
    }
  }
  .profile-pic {
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

export const StyledTitle = styled(Title)`
  margin-bottom: 1.5rem;
  @media (max-width: ${themes.breakpoints.md}) {
    text-align: center;
  }
`;

export const BioInfo = styled.div`
  width: 60%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 2rem;
  text-align: justify;

  p {
    margin-bottom: 0.5rem;
  }

  @media (max-width: ${themes.breakpoints.md}) {
    width: 90%;
    margin-left: 0rem;
  }

  @media (max-width: ${themes.breakpoints.sm}) {
    width: 100%;
    margin-left: 0rem;
  }
`;

export const Bio = styled.div`
  h3 {
    margin: 1rem 0rem 1rem 0rem;
  }

  p {
    margin-bottom: 1.5rem;
  }
`;
