import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar/index';
import DetailedInfo from 'components/common/DetailedInfo/index';

const MovieDetails = (): JSX.Element => {
  const { movieId } = useParams();
  return (
    <>
      <NavBar />
      <DetailedInfo type="movies" ID={movieId} />
      <Footer />
    </>
  );
};

export default MovieDetails;
