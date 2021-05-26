import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const MetaData = ({ title }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Helmet>
  );
};

MetaData.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MetaData;
