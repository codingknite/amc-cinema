import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as Styles from './styles';
import generateSlug from 'utils/generateSlug';
import MovieCards from 'components/MovieCards/index';
import { useFavorite } from 'context/useFavorites';

const DiscoverCategories = ({ category, data, loading }) => {
  const { favorites, dispatchFavorites } = useFavorite();
  const displayData = data.slice(0, 12);

  return (
    <>
      <Styles.Header>{category}</Styles.Header>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <Styles.Wrapper>
          <MovieCards
            topMargin="6.5rem"
            data={displayData}
            favorites={favorites}
            dispatchFavorites={dispatchFavorites}
          />
          <Link to={`/discover/${generateSlug(category)}`}>See All</Link>
        </Styles.Wrapper>
      )}
    </>
  );
};

DiscoverCategories.propTypes = {
  category: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default DiscoverCategories;
