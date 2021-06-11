/* eslint-disable react/react-in-jsx-scope */
import { useNavigate } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { BsSearch, BsCalendar } from 'react-icons/bs';

import { useState } from 'react';
import * as Styles from './styles';
import generateSlug from 'utils/generateSlug';
import { useFavorite } from 'context/useFavorites';
import { discover, genres } from 'data/categories';
const NavBar = () => {
  const navigate = useNavigate();
  const { favorites } = useFavorite();
  const totalFavorites = favorites.length;
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => setIsClicked(!isClicked);

  return (
    <Styles.Nav>
      <Styles.Logo
        src="https://fontmeme.com/permalink/210601/cdb13a4e4aeb6a1a64070ce3253d854a.png"
        alt="logo"
        onClick={() => navigate('/')}
      />
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
        <Styles.DropdownList>
          <Styles.Dropdown>
            <p>Discover</p>
            <FaChevronDown style={{ marginLeft: '0.5rem' }} />
          </Styles.Dropdown>
          <div className="dropdown-content">
            {discover.map((genre, index) => (
              <Styles.DropdownNav
                key={index}
                to={`/discover/${generateSlug(genre)}`}
                activeClassName="active-genre"
              >
                {genre}
              </Styles.DropdownNav>
            ))}
          </div>
        </Styles.DropdownList>
        <Styles.DropdownList>
          <Styles.Dropdown>
            <p>Genres</p>
            <FaChevronDown style={{ marginLeft: '0.5rem' }} />
          </Styles.Dropdown>
          <div className="dropdown2">
            {genres.map((genre) => (
              <Styles.DropdownNav
                drop2
                key={genre.id}
                to={`/genres/${generateSlug(genre.name)}`}
                activeClassName="active-genre"
              >
                {genre.name}
              </Styles.DropdownNav>
            ))}
          </div>
        </Styles.DropdownList>
        <li>
          <Styles.StyledNavLink
            to="/favorites"
            className="font fontSize"
            activeClassName="active"
          >
            {`Favorites ( ${totalFavorites} )`}
          </Styles.StyledNavLink>
        </li>
        <li>
          <Styles.StyledNavLink
            flexDisplay={true}
            to="/my-bookings"
            className="font fontSize"
            activeClassName="active-bookmark"
          >
            <BsCalendar style={{ marginRight: '0.5rem' }} />
            <p>My Bookings</p>
          </Styles.StyledNavLink>
        </li>
        <li>
          <Styles.StyledNavLink
            flexDisplay={true}
            to="/search"
            className="font fontSize"
            activeClassName="active-bookmark"
          >
            <BsSearch size="18" style={{ marginRight: '0.5rem' }} />
            <p>Search</p>
          </Styles.StyledNavLink>
        </li>
      </ul>
    </Styles.Nav>
  );
};

export default NavBar;
