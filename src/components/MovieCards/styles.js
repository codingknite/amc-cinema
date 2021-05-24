import styled from 'styled-components';
import { themes } from '../../styles/themes';

export const CardsWrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 18rem));
    justify-content: space-around;
    align-content: space-between;
    align-items: start;

    @media (max-width: ${themes.breakpoints.sm}) {
        grid-template-columns: repeat(auto-fit, minmax(10rem, 17.5rem));
    }
`;

export const MovieCard = styled.div`
    margin: 2rem 1rem 2rem 1rem;
    width: 250px;

    &:hover {
        transition: ease-in-out 500ms;
        transform: scale(1.03);
    }
`;

export const PosterWrapper = styled.div`
    text-align: center;
    cursor: pointer
`;

export const MoviePoster = styled.img`
    width: 100%;
    height: 23.75rem;
    border-radius: 0.8rem;
    background: ${(props) => props.imageLoaded ? 'none' : 'linear-gradient(-45deg, black, #6c757d, black, #6c757d)'};
    animation: gradient 15s ease infinite;

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`;

export const Title = styled.p`
    font-size: ${themes.fontSizes.md};
    font-weight: 400;
    margin-top: 0.5rem;
`;

export const MovieInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const MovieRating = styled.div`
    padding: 0.5rem;
`;

export const LikeMovie = styled(MovieRating)`
    cursor: pointer;
`;
