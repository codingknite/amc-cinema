import React from 'react';
import Footer from 'components/Footer';
import { useParams } from 'react-router-dom';
import NavBar from 'components/NavBar/index';
import DetailedInfo from 'components/common/DetailedInfo';

const SerieDetails = (): JSX.Element => {
  const { serieId } = useParams();
  return (
    <>
      <NavBar />
      <DetailedInfo type="series" ID={serieId} />
      <Footer />
    </>
  );
};

export default SerieDetails;
