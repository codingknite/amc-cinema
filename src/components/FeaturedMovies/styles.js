import styled from 'styled-components';
import { themes } from '../../styles/themes';

export const MovieWrapper = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${(props) => props.posterPath});
    background-repeat: no-repeat;
    background-size: cover; 
    min-height: 45rem;
    max-width: 100%;
    /* margin-top: 6.5rem; */
    position: relative;

    @media (max-width: ${themes.breakpoints.xsm}) {
        margin-top: 4rem;
    }
`;

export const MovieStats = styled.div`
    display: flex;
    align-items: center;
    padding: 3rem;
     
    .stats {
        margin-left: 2rem;
        font-size: ${themes.fontSizes.xl};
        font-family: 'Rubik';
    } 

    .rating {
        display: flex;
        margin-left: 2rem;
        align-items: center;
        font-family: 'Rubik';

        p {
            margin-left: 0.5rem;
            font-size: ${themes.fontSizes.xl};
        }
    }

    @media (max-width: ${themes.breakpoints.sm}) {
        padding: 1.5rem;

        .stats {
            margin-left: 1rem;
        }
    }

    @media (max-width: ${themes.breakpoints.xsm}) {
        padding: 1rem;

        .stats {
            margin-left: 1rem;
            font-size: ${themes.fontSizes.md};
        }
        .rating {
            p {
                font-size: ${themes.fontSizes.md};
            }
        }
    }
`;

export const MovieInfo = styled.div`
    margin: 4rem;

    .title {
        width: 80%;
        font-family: 'Rubik';
        font-size: 4rem;
        margin: 0 0 1rem 0;
    }

    .overview {
        width: 50%;
        margin: 2rem 0 2rem 0;
        padding: 1rem;
        font-size: ${themes.fontSizes.xl};
        text-align: justify;
    }

    .buttons {
        display: flex;
        margin-top: 2rem;
        padding: 2rem;

        p {
            margin-left: 0.5rem;
        }
    }

    @media (max-width: ${themes.breakpoints.md}) {
        margin: 2rem;
        .title {
            font-size: 3rem;
            margin: 0 0 0.5rem 0;
        }
        .overview {
            width: 100%;
            margin: 1rem 0 1rem 0;
            font-size: ${themes.fontSizes.lg};
        }
    }


    @media (max-width: ${themes.breakpoints.sm}) {
        margin: 1rem;
        .title {
            width: 100%;
            font-size: 2rem;
        }
        .overview {
            width: 100%;
        }
        .buttons {
            flex-wrap: wrap;
            padding: 0.5rem;
        }
    }
`;


