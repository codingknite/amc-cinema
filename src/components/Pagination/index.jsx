import PropTypes from 'prop-types';
import { scroller } from 'react-scroll';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';

import * as Styles from './styles';

const Pagination = ({ pageState, dispatch, page, pages }) => {
  const scrollTo = () => {
    return scroller.scrollTo('scrollelement', {
      duration: 1500,
      smooth: 'easeInOutQuard',
      offset: -50,
    });
  };

  return (
    <>
      {pages === 1 ? null : pageState === 1 ? (
        <Styles.NextButton
          onClick={() => {
            dispatch({ type: 'next' });
            scrollTo();
          }}
        >
          Page {pageState + 1} <GrLinkNext color="white" />
        </Styles.NextButton>
      ) : pageState === pages ? (
        <Styles.PrevButton
          onClick={() => {
            dispatch({ type: 'prev' });
            scrollTo();
          }}
        >
          <GrLinkPrevious /> Page {pageState - 1}
        </Styles.PrevButton>
      ) : (
        <Styles.ButtonsWrapper>
          <Styles.PrevButton
            onClick={() => {
              dispatch({ type: 'prev' });
              scrollTo();
            }}
          >
            <GrLinkPrevious color={'white'} /> Page {pageState - 1}
          </Styles.PrevButton>
          <Styles.NextButton
            onClick={() => {
              dispatch({ type: 'next' });
              scrollTo();
            }}
          >
            Page {pageState + 1} <GrLinkNext color="white" />
          </Styles.NextButton>
        </Styles.ButtonsWrapper>
      )}
    </>
  );
};

Pagination.propTypes = {
  pageState: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
};

export default Pagination;
