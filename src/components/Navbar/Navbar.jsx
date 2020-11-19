import { Link } from 'react-router-dom';
import React from 'react';
import { Button } from '@material-ui/core';
import HomeButton from '../buttons/HomeButton';

const Navbar = ({ routes }) => {
  return (
    <nav>
      <HomeButton />
      {routes.map((route, index) => {
        return (
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to={route.path}
            key={index}
          >
            {route.title}
          </Button>
        );
      })}
    </nav>
  );
};

export default Navbar;