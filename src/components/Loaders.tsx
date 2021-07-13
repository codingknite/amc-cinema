import React from 'react';
import styled from 'styled-components';
import { FlowerSpinner, HollowDotsSpinner } from 'react-epic-spinners';

const MainWrapper = styled.div`
  position: relative;
  height: 100vh;

  .loader {
    position: absolute;
    margin: 0;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  height: 40vh;

  .loader {
    position: absolute;
    margin: 0;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }
`;

export const MainLoader = (): JSX.Element => (
  <MainWrapper>
    <FlowerSpinner size={100} className="loader" />
  </MainWrapper>
);

export const ContentLoader = (): JSX.Element => (
  <ContentWrapper>
    <HollowDotsSpinner size={20} className="loader" />
  </ContentWrapper>
);
