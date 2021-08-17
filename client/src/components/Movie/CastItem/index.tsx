import React from 'react';
import PropTypes from 'prop-types';
import Lazyload from 'react-lazyload';

import * as Styles from './styles';
import { posterUrl } from 'utils/config';
import { StyledLink } from 'components/common/LinkButton';

interface Props {
  name: string;
  personId: number;
  castId: number;
  profilePath: string;
}

const CastList = ({
  name,
  personId,
  castId,
  profilePath,
}: Props): JSX.Element => (
  <StyledLink to={`/biography/${personId}`}>
    <div key={castId}>
      <Lazyload>
        <Styles.Cast src={posterUrl + `/${profilePath}`} alt={name} />
      </Lazyload>
    </div>
  </StyledLink>
);

CastList.propTypes = {
  name: PropTypes.string.isRequired,
  personId: PropTypes.number.isRequired,
  castId: PropTypes.number.isRequired,
  profilePath: PropTypes.string.isRequired,
};

export default CastList;
