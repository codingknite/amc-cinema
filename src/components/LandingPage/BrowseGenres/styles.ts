import styled from 'styled-components';
import { themes } from 'styles/themes';

export const TypeSelection = styled.div`
    display: flex;
    align-self: center;
    align-items: center;
    width: 90%;
    height: 5rem;
    border-bottom: 0.15rem solid gray;
    padding-bottom: 1.5rem;

    .movies {
        margin-right: 8rem;
    }
    .movies, .series {
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        font-weight: 600;
        cursor: pointer;
    }

    .active {
        font-size: 2.5rem;
        font-weight: bold;    
    }

    .active::after {
        content: "";
        display: block;
        position: relative;
        top: 28px;
        left: -40%;
        width: 6px;
        height: 6px;
        background: red;
        border-radius: 50%;
    }
`;

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
    width: 92%;
    margin-right: auto;
    margin-left: auto;
`;
