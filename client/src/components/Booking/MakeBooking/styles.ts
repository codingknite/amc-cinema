import styled from 'styled-components';
import { themes } from 'styles/themes';

interface GuideButtonProps {
  active: boolean;
}

export const BookingGuide = styled.section`
  margin-top: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GuideButton = styled.button<GuideButtonProps>`
  width: 18rem;
  background: none;
  display: flex;
  align-items: center;
  border: none;
  border-bottom: ${(props) =>
    props.active ? `3px solid ${themes.colors.heartRed}` : 'none'};
  border-radius: 0.1rem;
  cursor: pointer;

  .step-number {
    background: ${themes.colors.bkgDarkMode};
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 3px;
    padding: 0.2rem;
    margin-left: 0.5rem;
    color: ${themes.colors.white};
  }

  .step-name {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 1rem;
    padding: 0.2rem;
    margin: 0.2rem 0rem 0.2rem 0.5rem;
    color: ${themes.colors.white};
    text-transform: uppercase;

    .title {
      font-weight: bold;
    }

    .step {
      text-transform: lowercase;
      margin-bottom: 0.2rem;
    }
  }

  @media (max-width: ${themes.breakpoints.md}) {
    width: 15rem;
  }

  @media (max-width: ${themes.breakpoints.sm}) {
    margin-left: 0.1rem;

    .step-name {
      .title {
        font-size: 10px;
      }

      .step {
        width: 100%;
        font-size: 8px;
        text-align: left;
      }
    }
  }
`;

export const TicketWrapping = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  min-height: 40rem;

  .container {
    h2 {
      color: #adb5bd;
    }

    h2,
    h3 {
      margin-top: 1rem;

      @media (max-width: ${themes.breakpoints.sm}) {
        margin-left: 1rem;
      }
    }

    .submit {
      width: 100%;
      display: flex;
      outline: none;
      justify-content: flex-end;

      @media (max-width: ${themes.breakpoints.sm}) {
        justify-content: center;
      }
    }
  }
`;

export const SessionWrapping = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: #adb5bd;
    margin-top: 3rem;
  }
`;

export const Cinema = styled.section`
  margin-top: 1rem;
  outline: none;

  button {
    width: 10rem;
    margin: 0.5rem;
    padding: 1rem;
    border-radius: 2rem;
    border: none;
    cursor: pointer;
    font-family: 'Rubik';
    font-size: 0.95rem;
  }

  .selected {
    background: ${themes.colors.heartRed};
    color: white;
  }

  @media (max-width: ${themes.breakpoints.sm}) {
    margin-left: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const PickDate = styled.div`
  margin: 0.5rem;
  padding-left: 5rem;

  @media (max-width: ${themes.breakpoints.sm}) {
    display: flex;
    justify-content: center;
    padding-left: 0;
  }
`;

export const Time = styled.section`
  h3 {
    color: #adb5bd;
    margin-bottom: 0.5rem;
  }

  .selected {
    background: ${themes.colors.heartRed};
    color: white !important;
  }
`;

export const TimeButton = styled.button`
  background: ${themes.colors.dullWhite};
  color: ${themes.colors.black} !important;
  width: 6rem;
  border-radius: 2rem;
  padding: 0.8rem;
  margin-right: 0.5rem;
  color: ${themes.colors.white};
  border: none;
  cursor: pointer;
  font-family: 'Rubik';
  font-size: 0.95rem;

  @media (max-width: ${themes.breakpoints.sm}) {
    margin-top: 1.5rem;
    margin-left: 1.5rem;
  }
`;

export const SubmitButton = styled(TimeButton)`
  background: ${(props) => (props.disabled ? 'gray' : themes.colors.heartRed)};
  color: ${themes.colors.white} !important;
  margin-top: 3rem;
  margin-bottom: 3rem;
  width: 10rem;
`;

export const SubmitSeatsButton = styled(SubmitButton)`
  width: 10rem;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-top: 2rem;
  margin-right: auto;
  span {
    display: inline-flex;
    align-items: center;
  }
`;

export const SeatSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 30%;
  height: 8rem;
  margin-left: auto;
  margin-top: 2rem;
  margin-right: auto;
  border: 2px solid ${themes.colors.dullWhite};
  border-radius: 3px;

  .category {
    p {
      display: flex;
      align-items: center;
    }

    h4 {
      font-weight: bold;
      text-transform: uppercase;
      margin-top: 0.3rem;
      font-family: 'Rubik';
    }
  }

  .cat-buttons {
    padding: 0.2rem;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background: none;
      border: none;
      cursor: pointer;
    }

    span {
      color: ${themes.colors.heartRed};
      font-size: 2rem;
      font-weight: bold;
      font-family: 'Rubik';
    }
  }

  @media (max-width: ${themes.breakpoints.md}) {
    width: 55%;
  }

  @media (max-width: ${themes.breakpoints.sm}) {
    width: 95%;
  }
`;

export const TotalBill = styled.p`
  width: 25%;
  margin-left: auto;
  margin-top: 2rem;
  margin-right: auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  font-family: 'Rubik';
  font-size: 1.5rem;
  font-weight: bold;

  span {
    display: flex;
    align-items: center;
  }

  @media (max-width: ${themes.breakpoints.md}) {
    width: 50%;
  }

  @media (max-width: ${themes.breakpoints.sm}) {
    width: 95%;
  }
`;
