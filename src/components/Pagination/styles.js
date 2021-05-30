import styled from 'styled-components';
import { themes } from 'styles/themes';

export const ButtonsWrapper = styled.div`
    display: flex;
    width: 100%;
`;

export const PrevButton = styled.button`
    background: ${themes.colors.white};
    height: 2.5rem;
    width: 6rem;
    padding: 1rem;
    justify-self: flex-end;
    border: none;
    outline: none;
    border-radius: 2rem;
    cursor: pointer;
    margin-left: 3rem;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    &:hover {
        transition: ease-in-out 500ms;
        transform: scale(1.05);
    };

    @media (max-width: ${themes.breakpoints.sm}) {
        margin-left: 1rem;
    }
`;


export const NextButton = styled(PrevButton)`
    margin-left: auto;
    margin-right: 3rem;

    @media (max-width: ${themes.breakpoints.sm}) {
        margin-right: 1rem;
    }
`;

