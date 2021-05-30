import { FlowerSpinner } from 'react-epic-spinners';
import styled from 'styled-components';

const Wrapper = styled.div`
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
const MainLoader = () => (
  <Wrapper>
    <FlowerSpinner size={100} className="loader" />
  </Wrapper>
);

export default MainLoader;
