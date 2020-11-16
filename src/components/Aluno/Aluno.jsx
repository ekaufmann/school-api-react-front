
import React, { Fragment, useState } from 'react';
import MenuAluno from './MenuAluno';
import './estilo.css';

function Aluno() {

  const [alunos, setAlunos] = useState([]);

  return (
    <Fragment>
      <MenuAluno setAlunos={setAlunos} />
      <h1>Aluno</h1>
    </Fragment>
  );
}

export default Aluno;