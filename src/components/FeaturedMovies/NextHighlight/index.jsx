import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import * as Styles from './styles';
import { posterUrl } from 'utils/config';

const NextHighlight = ({ moviePoster, movieTitle }) => {
  return (
    <Styles.NextHighlightWrapper moviePoster={posterUrl + moviePoster}>
      <div className="next-wrapper">
        <div>
          <p>Next</p>
          <p className="movie-title">{movieTitle}</p>
        </div>
        <BsArrowRight size="3rem" style={{ fill: 'white' }} />
      </div>
    </Styles.NextHighlightWrapper>
  );
};

export default NextHighlight;
