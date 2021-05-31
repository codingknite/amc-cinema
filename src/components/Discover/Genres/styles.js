import styled from 'styled-components';
import { themes } from '../../../styles/themes';

export const MainWrapper = styled.section`
    display: flex;
    flex-direction: column;
`;

export const SliderButton = styled.button`
    background: ${themes.colors.heartRed};
    border-radius: 2rem;
    border: none;
    outline: none;
    padding: 0.8rem;
    color: white;
    font-size: 1rem;
    cursor: pointer;
`;

export const SliderWrapper = styled.div`
    margin-top: 2rem;
`;