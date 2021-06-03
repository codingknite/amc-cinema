import PropTypes from 'prop-types';

import * as Styles from './styles';
import generateSlug from 'utils/generateSlug';
import MovieCards from 'components/MovieCards/index';
import { ContentLoader } from 'components/Loaders';
import { useFavorite } from 'context/useFavorites';
import { StyledLinkButton } from 'components/common/LinkButton';

const DiscoverCategories = ({ category, data, loading }) => {
  const { favorites, dispatchFavorites } = useFavorite();
  const displayData = data.slice(0, 12);

  return (
    <>
      <Styles.Header>{category}</Styles.Header>
      {loading ? (
        <ContentLoader />
      ) : (
        <Styles.Wrapper>
          <MovieCards
            topMargin="6.5rem"
            data={displayData}
            favorites={favorites}
            dispatchFavorites={dispatchFavorites}
          />
          <StyledLinkButton
            to={`/discover/${generateSlug(category)}`}
            width="7rem"
            flexEnd={true}
          >
            See All
          </StyledLinkButton>
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
