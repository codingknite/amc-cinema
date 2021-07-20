import { Link } from 'react-router-dom';
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

  @media (max-width: ${themes.breakpoints.md}) {
    width: 100%;
  }
`;

export const Header = styled.p`
  font-size: 2.5rem;
  font-family: 'Rubik';
  margin: 1.5rem 0 0 1.5rem;
  color: #adb5bd;
`;

export const StyledLink = styled(Link)`
  color: ${themes.colors.white};
  text-align: center;
  padding: 0.7rem;
  align-self: flex-end;
  cursor: pointer;

  :hover {
    color: ${themes.colors.heartRed};
  }
`;
