import { FlowerSpinner, HollowDotsSpinner } from 'react-epic-spinners';
import styled from 'styled-components';

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

export const MainLoader = () => (
  <MainWrapper>
    <FlowerSpinner size={100} className="loader" />
  </MainWrapper>
);

export const ContentLoader = () => (
  <ContentWrapper>
    <HollowDotsSpinner size={20} className="loader" />
  </ContentWrapper>
);
