import React from 'react';
import { scroller } from 'react-scroll';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';

import * as Styles from './styles';

interface Argument {
  type: string;
}

interface Props {
  pageState: number;
  dispatch: ({ type }: Argument) => void;
  pages: number;
}

const Pagination = ({ pageState, dispatch, pages }: Props): JSX.Element => {
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

export default Pagination;
