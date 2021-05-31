import Star from 'react-rating';
import PropTypes from 'prop-types';
import * as AiIcons from 'react-icons/ai';

import { themes } from 'styles/themes';

const Rating = ({ initialRating }) => {
  return (
    <Star
      emptySymbol={
        <AiIcons.AiOutlineStar size="22" color={themes.colors.white} />
      }
      fullSymbol={<AiIcons.AiFillStar size="22" color={themes.colors.orange} />}
      initialRating={initialRating}
      readonly
    />
  );
};

Rating.propTypes = {
  initialRating: PropTypes.number.isRequired,
};

export default Rating;
