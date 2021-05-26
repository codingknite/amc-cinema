import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const PageHead = ({ title }) => {
  <Helmet>
    <title>{title}</title>
  </Helmet>;
};

PageHead.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHead;
