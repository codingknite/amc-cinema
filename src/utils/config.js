import React from 'react';
import PropTypes from 'prop-types';
import { GrPrevious, GrNext } from 'react-icons/gr';
import 'react-datepicker/dist/react-datepicker.css';

export const APIKey = process.env.REACT_APP_API_KEY;

export const baseUrl = 'https://api.themoviedb.org/3';
export const imdbUrl = 'https://www.imdb.com/title/';
export const posterUrl = 'https://image.tmdb.org/t/p/w500/';

export const opts = {
    height: '390',
    width: '640',
    playerVars: {
        autoplay: 0,
    },
};

export const initObject = {
    name: 'science-fiction',
    id: 878,
};

export const formState = {
    session: false,
    tickets: false,
};

export const startTime = {
    screen: '',
    time: '',
};

export const attendeeState = {
    adults: 0,
    kids: 0,
    seniors: 0,
};

export const bookingFormStep = {
    step1: true,
    step2: false,
    step3: false,
}

const genreStyles = {
    background: 'white',
    right: '10px',
    position: 'absolute',
    display: 'block',
    padding: '5px',
    transform: 'translate(0, -50%)',
    borderRadius: '2rem',
    cursor: 'pointer',
}
const castStyles = {
    background: 'white',
    position: 'absolute',
    top: '50%',
    display: 'block',
    padding: '5px',
    transform: 'translate(0, -50%)',
    borderRadius: '2rem',
    cursor: 'pointer',
}

const NextArrowGenres = ({ onClick }) => {
    return (
        <GrNext
            style={{
                ...genreStyles,
                right: '5px',
                top: '1.4rem',
            }}
            size='1.6rem'
            onClick={onClick}
        />
    );
}

const PrevArrowGenres = ({ onClick }) => {
    return (
        <GrPrevious
            style={{
                ...genreStyles,
                zIndex: 1,
                left: '5px',
                top: '1.4rem',
            }}
            size='1.6rem'
            onClick={onClick}
        />
    );
}

const PrevArrow = ({ onClick }) => {
    return (
        <GrPrevious
            style={{
                ...castStyles,
                left: '-20px',
                zIndex: 1,
            }}
            size="1.2rem"
            onClick={onClick}
        />
    );
}

const NextArrow = ({ onClick }) => {
    return (
        <GrNext
            style={{
                ...castStyles,
                right: '-17.5px',
            }}
            size="1.2rem"
            onClick={onClick}
        />
    );
}

export const genreSettings = {
    infinite: true,
    arrows: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    prevArrow: <PrevArrowGenres />,
    nextArrow: <NextArrowGenres />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 390,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
};

export const castSettings = {
    infinite: true,
    arrows: true,
    slidesToShow: 12,
    slidesToScroll: 2,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
    ]
};



//prop types
NextArrow.propTypes = {
    onClick: PropTypes.func.isRequired
};

PrevArrow.propTypes = {
    onClick: PropTypes.func.isRequired
};

NextArrowGenres.propTypes = {
    onClick: PropTypes.func.isRequired
};

PrevArrowGenres.propTypes = {
    onClick: PropTypes.func.isRequired
};
