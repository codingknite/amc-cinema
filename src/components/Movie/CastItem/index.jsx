import PropTypes from 'prop-types';
import Lazyload from 'react-lazyload';
import { Link } from 'react-router-dom';

import * as Styles from './styles';
import { posterUrl } from 'utils/config';

const CastList = ({ name, personId, castId, profilePath }) => (
  <Link to={`/biography/${personId}`}>
    <div key={castId}>
      <Lazyload>
        <Styles.Cast src={posterUrl + `/${profilePath}`} alt={name} />
      </Lazyload>
    </div>
  </Link>
);

CastList.propTypes = {
  name: PropTypes.string.isRequired,
  personId: PropTypes.number.isRequired,
  castId: PropTypes.number.isRequired,
  profilePath: PropTypes.string.isRequired,
};

export default CastList;
