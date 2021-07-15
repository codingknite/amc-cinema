import React from 'react';
import Star from 'react-rating';
import * as AiIcons from 'react-icons/ai';

import { themes } from 'styles/themes';

interface Props {
  initialRating: number;
}
const Rating = ({ initialRating }: Props): JSX.Element => {
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

export default Rating;
