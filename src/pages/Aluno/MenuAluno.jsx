import React from 'react';
import { ButtonGroup } from '@material-ui/core';
//import { Link as RouterLink } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const MenuAluno = ({ setAlunos }) => {
  return (
    <ButtonGroup>
      <Navbar routes={[]} />
    </ButtonGroup>
  );
};

export default MenuAluno;