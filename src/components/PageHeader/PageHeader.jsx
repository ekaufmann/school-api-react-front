import React from 'react';
import { ROUTES_ADM as routes } from '../../config/Routes/Routes';
import Navbar from '../Navbar';

const PageHeader = ({ saudacao }) => {
  return (
    <header>
      <Navbar routes={routes} />

      <h1>{saudacao}</h1>
    </header>
  );
};

export default PageHeader;