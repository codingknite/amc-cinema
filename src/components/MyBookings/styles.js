import styled from 'styled-components';

import { Button } from 'components/FavoriteMovies/styles';
import { themes } from 'styles/themes';

export const Wrapper = styled.section`
    margin-top: 6.5rem;

  @media (max-width: ${themes.breakpoints.sm}) {
    margin-top: 1rem;
  }

`;

export const MovieInfo = styled.div`
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: ${themes.breakpoints.sm}) {
      margin-left: 1rem;
      flex-direction: column;
      justify-content: space-evenly;
  }
`;

export const BookingInfo = styled.div`
  margin-bottom: 1rem;

  .ticket-info {
    display: flex;
    color: orange;
    font-family: 'Rubik';
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: flex;
    p {
      margin-right: 0.5rem;
    }    

    @media (max-width: ${themes.breakpoints.sm}) {
      flex-wrap: wrap;
    }
  }

  .date-info {
  color: orange;
  font-family: 'Rubik';
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: flex;

  span {
    margin-left: 0.3rem;
  }
}
`;

export const CancelButton = styled(Button)`
  width: 8rem;
  margin-left: 0;
`;