import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { themes } from 'styles/themes';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0%;
  z-index: 2;
  width: 100%;
  height: 6.5rem;
  cursor: pointer;
  background-color: #000;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: ${themes.breakpoints.sm}) {
    height: 5rem;
  }

  .nav-links {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    text-decoration: none;

    .active::after {
      content: '';
      display: block;
      position: relative;
      top: 5px;
      left: 55%;
      width: 6px;
      height: 6px;
      background: red;
      border-radius: 50%;
    }

    @media (max-width: ${themes.breakpoints.md}) {
      width: 100%;
      justify-content: space-around;
    }

    @media (max-width: ${themes.breakpoints.md}) {
      position: fixed;
      background: #000;
      height: 85vh;
      width: 100%;
      margin-left: 1500px;
      flex-direction: column;
      transition: all 500ms ease-out;
      pointer-events: none;
    }
  }

  .toggle .line1 {
    transform: rotate(-45deg) translate(-3.5px, 6px);
  }
  .toggle .line2 {
    transition: all 0.7s ease;
    width: 0;
  }
  .toggle .line3 {
    transform: rotate(45deg) translate(-3.5px, -6px);
  }

  .open {
    margin-left: 0;
    pointer-events: all;
  }
`;

export const Logo = styled.img`
  height: 5rem;
  width: 5rem;
  align-self: center;
  margin-left: 5rem;

  @media (max-width: ${themes.breakpoints.md}) {
    width: 4rem;
    height: 4rem;
    margin-left: 1rem;
  }
`;

export const Hamburger = styled.div`
  display: none;
  outline: none;
  div {
    width: 30px;
    height: 1.5px;
    border-radius: 2rem;
    background: #f2f5f7;
    margin: 5px;
    transition: all 0.3s ease;
  }

  @media (max-width: ${themes.breakpoints.md}) {
    display: block;
    position: absolute;
    cursor: pointer;
    right: 5%;
    top: 50%;
    transform: translate(-5%, -50%);
    z-index: 2;
    transition: all 0.7s ease;
  }
`;

export const StyledNavLink = styled(NavLink)<NavLinkProps>`
  text-decoration: none;
  color: ${themes.colors.white};
  display: ${(props) => (props.flexDisplay ? 'flex' : 'block')};
  align-items: ${(props) => (props.flexDisplay ? 'center' : '')};

  &:hover {
    color: silver;
  }
`;

interface NavLinkProps {
  flexDisplay?: string;
  activeClassName: string;
}
