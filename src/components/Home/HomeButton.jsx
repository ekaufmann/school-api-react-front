import React from 'react';
import { Button } from '@material-ui/core';

import { Link as RouterLink } from 'react-router-dom';
import { ROUTES } from '../../config/Routes/Routes';

const HomeButton = () => {
  return (
    <Button
      color="primary"
      variant="contained"
      component={RouterLink}
      to={ROUTES[0].path}
    >
      Home
    </Button>
  );
};

export default HomeButton;