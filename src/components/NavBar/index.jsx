import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as BsIcons from 'react-icons/bs';

import * as Styles from './styles';
import Logo from 'assets/logo.png';

const NavBar = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => setIsClicked(!isClicked);

  return (
    <Styles.Nav>
      <Styles.Logo src={Logo} alt="logo" onClick={() => navigate('/')} />
      <Styles.Hamburger
        onClick={handleClick}
        className={isClicked ? 'toggle' : ''}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </Styles.Hamburger>
      <ul className={isClicked ? 'nav-links open' : 'nav-links'}>
        <li>
          <Styles.StyledNavLink
            to="/"
            className="font fontSize"
            activeClassName="active"
            end
          >
            Home
          </Styles.StyledNavLink>
        </li>
        <li>
          <Styles.StyledNavLink
            to="/movies"
            className="font fontSize"
            activeClassName="active"
          >
            Movies
          </Styles.StyledNavLink>
        </li>
        <li>
          <Styles.StyledNavLink
            to="/movies"
            className="font fontSize"
            activeClassName="active"
          >
            Series
          </Styles.StyledNavLink>
        </li>
        <li>
          <Styles.StyledNavLink
            to="/favorites"
            className="font fontSize"
            activeClassName="active"
          >
            <BsIcons.BsBookmarkFill style={{ marginRight: '0.5rem' }} />
            Favorites
          </Styles.StyledNavLink>
        </li>
        <li>
          <Styles.StyledNavLink
            to="/my-bookings"
            className="font fontSize"
            activeClassName="active"
          >
            <BsIcons.BsCalendar style={{ marginRight: '0.5rem' }} />
            Bookings
          </Styles.StyledNavLink>
        </li>
        <li>
          <Styles.StyledNavLink
            to="/search"
            className="font fontSize"
            activeClassName="active"
          >
            <BsIcons.BsSearch size="18" style={{ marginRight: '0.5rem' }} />
            Search
          </Styles.StyledNavLink>
        </li>
      </ul>
    </Styles.Nav>
  );
};

export default NavBar;
