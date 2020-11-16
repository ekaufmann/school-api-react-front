import React from 'react';
import { ButtonGroup } from '@material-ui/core';
//import { Link as RouterLink } from 'react-router-dom';
import HomeButton from '../Home/HomeButton';
import Navbar from '../Navbar/Navbar';

const MenuAluno = ({ setAlunos }) => {
  return (
    <ButtonGroup>
      <HomeButton />
      <Navbar routes={[]} />
    </ButtonGroup>
  );
};

export default MenuAluno;