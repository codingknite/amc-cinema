import React from 'react';
import 'slick-carousel/slick/slick.css';

import { Cast } from 'types/types';
import CastItem from 'components/Movie/CastItem';
import styled from 'styled-components';

interface Props {
  cast: Cast[];
}

const Wrapper = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
`;
const MovieCast = ({ cast }: Props): JSX.Element => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default MovieCast;
