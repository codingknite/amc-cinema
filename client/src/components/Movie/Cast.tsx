import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import { Cast } from 'types/types';
import * as config from 'utils/config';
import CastItem from 'components/Movie/CastItem';

interface Props {
  cast: Cast[];
}
const MovieCast = ({ cast }: Props): JSX.Element => {
  const castSettings = {
    ...config.castSettings,
    slidesToShow: cast.length < 12 ? cast.length : 12,
  };

  return (
    <Slider {...castSettings}>
      {cast &&
        cast.map((cast) => (
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

export default MovieCast;
