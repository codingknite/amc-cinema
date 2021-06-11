import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import * as config from 'utils/config';
import CastItem from 'components/Movie/CastItem';

const MovieCast = ({ cast }) => {
  const castSettings = {
    ...config.castSettings,
    slidesToShow: cast.length < 12 ? cast.length : 12,
  };

  return (
    <Slider {...castSettings}>
      {cast.map((cast) => (
        <CastItem
          key={cast.cast_id}
          name={cast.name}
          personId={cast.id}
          castId={cast.cast_id}
          profilePath={cast.profile_path}
        />
      ))}
    </Slider>
  );
};

MovieCast.propTypes = {
  cast: PropTypes.array.isRequired,
};

export default MovieCast;
