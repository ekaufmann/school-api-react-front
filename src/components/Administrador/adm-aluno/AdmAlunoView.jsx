import { Box, Button, FormControl, InputLabel, makeStyles, MenuItem, Select, TextField } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import AdmHeader from '../AdmHeader';

const estilo = makeStyles((tema) => ({
  formControl: {
    margin: tema.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: tema.spacing(1),
    minWidth: 100,
  },
  inputLabel: {
    margin: tema.spacing(1, 0),
  },
  addButton: {
    margin: tema.spacing(3, 1),
    minWidth: 100,
  },
  searchButton: {
    margin: tema.spacing(3, 1),
    minWidth: 100,
    color: '#fff',
    backgroundColor: '#4caf50',
    borderColor: '#4caf60',
    boxShadow: '0px 1px 1px 1px rgba(0,0,0,0.2)',
    '&:hover': {
      backgroundColor: '#4caf50',
      borderColor: '#4caf60',
      boxShadow: '0px 2px 4px 1px rgba(0,0,0,0.2)',
    },
    '&:active': {
      boxShadow: '0 0 0 0.2rem rgba(0,255,125,.5)',
      backgroundColor: '#367d39',
      borderColor: '#4caf60',
    },
  }
}));

const AdmAlunoView = () => {

  const classes = estilo();
  const allAlunos = 2;

  const [aluno, setAluno] = useState({ id: 0, active: '' });
  const [disableSearch, setDisableSearch] = useState(false);

  const _handleUnitSearch = (event) => {
    const alvo = document.querySelector('#alunoId').value;
    if(alvo.trim() === "") {
      setDisableSearch(false);
    } else {
      setDisableSearch(true);
    }
  }

  const _handleActiveSelection = (event) => {
    const value = event.target.value;
    if(value !== '') {
      setAluno({ ...aluno, active: value});
    }
  }

  return (
    <Fragment>
      <AdmHeader saudacao="Gerenciamento de Alunos" />

      <form name="gerencia-alunos">
        <fieldset>
          <legend>Consultar alunos:</legend>

          <Box display="flex">
            <Box justifyContent="flex-start" alignItems="flex-start" >
              <TextField
                id="alunoId"
                name="id"
                label="ID Aluno"
                variant="outlined"
                margin="normal"
                title="Se nenhuma id for informada, a pesquisa retornará todos os alunos"
                onChange={_handleUnitSearch}
              />
              <FormControl disabled={disableSearch} variant="outlined" className={classes.formControl}>
                <InputLabel id="select-alunos" className={classes.inputLabel}>Alunos</InputLabel>
                <Select
                  title="Se nehuma opção for escolhida, a pesquisa retornará ativos e inativos"
                  labelId="select-alunos"
                  id="select-alunos"
                  label="Alunos"
                  className={classes.selectEmpty}
                  defaultValue={allAlunos}
                  onChange={_handleActiveSelection}
                >
                  <MenuItem value={allAlunos}>Todos</MenuItem>
                  <MenuItem value={0}>Inativos</MenuItem>
                  <MenuItem value={1}>Ativos</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box justifyContent="flex-end">
              <Button
                variant="outlined"
                color="primary"
                onClick={() => console.log(aluno)}
                className={classes.searchButton}
              >
                Consultar
              </Button>
            </Box>

            <Box flexGrow={1}></Box>

            <Box justifyContent="flex-end">
              <Button
                variant="contained"
                color="primary"
                className={classes.addButton}
              >
                Novo Aluno
              </Button>
            </Box>
          </Box>
        </fieldset>
        <br />
      </form>
    </Fragment>
  );
};

export default AdmAlunoView;