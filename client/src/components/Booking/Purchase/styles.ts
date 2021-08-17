import styled from 'styled-components';
import { SubmitButton } from 'components/Booking/MakeBooking/styles';
import { themes } from 'styles/themes';

export const Wrapper = styled.section`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-left: auto;
  margin-right: auto;

  h2 {
    margin-bottom: 2rem;
  }

  @media (max-width: ${themes.breakpoints.md}) {
    width: 60%;
  }

  @media (max-width: ${themes.breakpoints.sm}) {
    width: 90%;
  }
`;

export const PurchaseInfo = styled.section`
  background: ${themes.colors.dullWhite};
  color: ${themes.colors.black} !important;
  border-radius: 3px;
  .cinema-name {
    margin-top: 0.5rem;
    padding: 0.5rem;
    font-size: 1.1rem;
    font-weight: bold;
  }

  .movie-title {
    padding: 0rem 0.5rem 0.5rem 0.5rem;
    font-family: 'Rubik';
    font-weight: bold;
    font-size: 1.8rem;
  }

  .date-time,
  .seats-screen {
    display: flex;
    text-align: center;
    justify-content: space-around;
  }

  .date,
  .time,
  .seats-container,
  .screen-container {
    width: 15rem;
    text-align: left;
    padding: 1rem;
  }

  .date-title,
  .time-title,
  .seats,
  .screen,
  .total {
    font-size: 1.3rem;
    font-weight: bold;
    font-family: 'Rubik';
  }

  .format-date,
  .watch-time,
  .seats-info,
  .screen-info {
    font-size: 0.95rem;
    @media (max-width: ${themes.breakpoints.sm}) {
      font-size: 0.85rem;
    }
  }

  .total,
  .total-bill {
    background: ${themes.colors.white};
  }

  .total {
    padding: 0.4rem;
  }

  .total-bill {
    padding: 0.2rem 0rem 0.5rem 1rem;
    display: flex;
    align-items: center;
    font-size: 1.3rem;
  }
`;

export const PaymentWrapper = styled.section`
  h4 {
    margin: 1rem 0 1rem 0;
    font-size: 1.2rem;
  }
`;

export const PaymentMethods = styled.div`
  background: ${themes.colors.dullBlack};
  display: flex;
  justify-content: space-around;
  padding: 1rem;

  p-icon {
    cursor: pointer;
  }
`;

export const Button = styled(SubmitButton)`
  min-width: 10rem;
  margin-left: auto;
  margin-right: auto;
`;
