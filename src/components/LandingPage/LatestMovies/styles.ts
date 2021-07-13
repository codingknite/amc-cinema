import styled from 'styled-components';
import { themes } from 'styles/themes';

export const Wrapper = styled.section`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  width: 70%;

  .link {
    color: green;
    background: green;
  }
`;

export const Header = styled.p`
  font-size: 2.5rem;
  font-family: 'Rubik';
  margin: 1.5rem 0 0 1.5rem;
`;

export const StyledLink = styled.a`
  width: 6rem;
  margin-right: auto;
  background: ${themes.colors.heartRed};
  color: ${themes.colors.white};
  text-align: center;
  margin: 0.5rem 2.5rem 0.5rem 0rem;
  padding: 0.7rem;
  align-self: flex-end;
  border-radius: 2rem;
  cursor: pointer;
`;
