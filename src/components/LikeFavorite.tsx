import React from 'react';
import * as BsIcons from 'react-icons/bs';
import { themes } from 'styles/themes';

interface DispatchArguments {
  type: string;
  payload: number;
}
interface Props {
  favorites: Array<number>;
  dispatchFavorites: (args: DispatchArguments) => void;
  movieId: number;
}
const LikeFavorite = ({
  favorites,
  dispatchFavorites,
  movieId,
}: Props): JSX.Element => {
  return (
    <div>
      {favorites.includes(movieId) ? (
        <>
          <BsIcons.BsHeartFill
            color={themes.colors.red}
            onClick={() => {
              dispatchFavorites({
                type: 'favorite',
                payload: movieId,
              });
            }}
          />
        </>
      ) : (
        <>
          <BsIcons.BsHeart
            color={themes.colors.white}
            onClick={() => {
              dispatchFavorites({
                type: 'favorite',
                payload: movieId,
              });
            }}
          />
        </>
      )}
    </div>
  );
};

export default LikeFavorite;
