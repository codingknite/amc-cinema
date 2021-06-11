import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { themes } from 'styles/themes';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${themes.colors.white};

`;

export const StyledLinkButton = styled(Link)`
  border: none;
  font-size: 0.875rem;
  width: ${(props) => props.width ? props.width : '9rem'};
  padding: 0.8rem;
  margin-right: 1rem;
  margin-bottom: ${(props) => props.bottommargin ? '1rem' : '0rem'};
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${themes.colors.white};
  background-color: ${themes.colors.heartRed};
  align-self: ${(props) => props.flexEnd ? 'flex-end' : 'flex-start'};
`;
