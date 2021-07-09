import styled from 'styled-components';

export const NextHighlightWrapper = styled.div`
    position: absolute;
    background: blue;
    height: 18rem;
    width: 30rem;
    bottom: 0;
    right: 0;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url(${(props) => props.moviePoster});
    background-size: cover;

    .next-wrapper {
        position: relative;
        right: 27%;
        top: 45%;
        display: flex;
        width: 10rem;
        div {
            display: flex;
            flex-direction: column;
            width: 6.5rem;
        }
    }
`;