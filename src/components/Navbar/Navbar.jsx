import { Link } from 'react-router-dom';
import React from 'react';
import { Button } from '@material-ui/core';

const Navbar = ({ routes }) => {
  return (
    <nav>
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