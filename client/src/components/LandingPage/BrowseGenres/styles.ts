import styled from 'styled-components';
import { themes } from 'styles/themes';

export const TypeSelection = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  width: 90%;
  height: 5rem;
  border-bottom: 0.15rem solid gray;
  padding-bottom: 1.5rem;

  .movies {
    margin-right: 8rem;
  }
  .movies,
  .series {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    transition: ease-in-out 500ms;
  }

  .active {
    font-size: 2.5rem;
    font-weight: bold;
  }

  .active::after {
    content: '';
    display: block;
    position: relative;
    top: 28px;
    left: -40%;
    width: 6px;
    height: 6px;
    background: red;
    border-radius: 50%;
  }

  @media (max-width: ${themes.breakpoints.md}) {
    justify-content: space-evenly;
    .movies {
      margin-right: 4rem;
    }

    .active {
      font-size: 2rem;
      font-weight: bold;
    }
  }
`;

export const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const SliderButton = styled.button`
  background: ${themes.colors.heartRed};
  border-radius: 2rem;
  border: none;
  outline: none;
  padding: 0.8rem;
  color: white;
  font-size: 1rem;
  cursor: pointer;
`;

export const SliderWrapper = styled.div`
  margin-top: 2rem;
  width: 92%;
  margin-right: auto;
  margin-left: auto;
`;

export const ResultsPar = styled.p`
  font-size: 1rem;
  margin: 2rem 0 0.5rem 3rem;

  span {
    font-size: 1.5rem;
    font-weight: bold;
  }

  @media (max-width: ${themes.breakpoints.md}) {
    margin: 0.5rem 0 0.5rem 1.5rem;

    span {
      font-size: 1.3rem;
    }
  }
`;
