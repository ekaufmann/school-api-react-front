import React, { Fragment } from 'react';
import { ROUTES as routes } from '../../config/Routes/Routes';
import Navbar from '../../components/Navbar';

const Home = () => {
  return (
    <Fragment>
      <Navbar routes={routes.slice(1)} />
      <h1>Home</h1>
    </Fragment>
  );
}

export default Home;