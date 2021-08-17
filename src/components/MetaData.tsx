import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  title: string;
}
const MetaData = ({ title }: Props): JSX.Element => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{title}</title>
  </Helmet>
);

export default MetaData;
