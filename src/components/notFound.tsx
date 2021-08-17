import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import NavBar from './NavBar';
import { themes } from 'styles/themes';
import notFoundIcon from 'assets/404.svg';

const Wrapper = styled.div`
  height: 85vh;
  margin-top: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    height: 100%;
    padding: 1rem;

    img {
      max-width: 100%;
    }

    p {
      text-align: center;
      font-size: 2rem;
      font-weight: bold;
    }
    button {
      width: 10rem;
      outline: none;
      padding: 1rem;
      cursor: pointer;
      background: none;
      align-self: center;
      border-radius: 2rem;
      color: ${themes.colors.white};
      border: 2px solid ${themes.colors.white};

      &:hover {
        border: none;
        background-color: ${themes.colors.heartRed};
        transform: scale(1.05);
        transition: all ease-in 300ms;
      }
    }

    @media (max-width: ${themes.breakpoints.lg}) {
      height: 70%;
    }
  }
`;

const NotFound = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <Wrapper>
        <div>
          <img src={notFoundIcon} alt="Icon" className="icon" />
          <p>Oops, Wrong Turn😬</p>
          <button onClick={() => navigate('/')}>Go Back Home</button>
        </div>
      </Wrapper>
    </>
  );
};

export default NotFound;
