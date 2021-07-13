import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import * as Styles from './styles';
import { posterUrl } from 'utils/config';

interface Props {
  moviePoster: string | null;
  movieTitle: string;
}
const NextHighlight = ({ moviePoster, movieTitle }: Props): JSX.Element => {
  return (
    <Styles.NextHighlightWrapper moviePoster={posterUrl + moviePoster}>
      <div className="next-wrapper">
        <div>
          <p>Next </p>
          <BsArrowRight size="1.5rem" style={{ fill: 'white' }} />
        </div>
        <p className="movie-title">{movieTitle}</p>
      </div>
    </Styles.NextHighlightWrapper>
  );
};

export default NextHighlight;
