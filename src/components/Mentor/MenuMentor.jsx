import { Button, ButtonGroup, Grid } from '@material-ui/core';
import React from 'react';
import HomeButton from '../Home/HomeButton';

const MenuMentor = () => {
  return (
    // <Grid container spacing={2}>
    //   <Grid item>
    //     <HomeButton />
    //   </Grid>
    // </Grid>
    <ButtonGroup>
      <HomeButton />
      <Button
        color="primary"
        variant="contained"
      >
        Consultar mentores
      </Button>
    </ButtonGroup>
  );
};

export default MenuMentor;