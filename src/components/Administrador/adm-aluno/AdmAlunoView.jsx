import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import AdmHeader from '../AdmHeader';
import { estilo } from './estilo';
import api from '../../../config/api';
import TableSearch from './TableSearch';


const AdmAlunoView = () => {

  const classes = estilo();
  const allAlunos = 2;

  const [aluno, setAluno] = useState({ id: 0, active: 2 });
  const [alunosConsultados, setAlunosConsultados] = useState([]);
  const [disableSearch, setDisableSearch] = useState(false);

  const _handleGetRequest = (url, func) => {
    api.get(url)
      .then((response) => {
        const dados = response.data;

        if(!Array.isArray(dados)) {
          func([dados]);
        } else {
          func(dados);
        }
      }).catch((erro) => {
        if(erro.response.status === 404) {
          alert("Aluno não encontrado!");
        }
      })
  }

  const _handleAlunosConsulta = (event) => {
    let url = '/aluno?active=';
    if (aluno.id === 0 && (aluno.active === 0 || aluno.active === 1)) {
      url = `/aluno?active=${aluno.active}`;
    }
    if (aluno.id > 0) {
      url = `/aluno/${aluno.id}`;
    }
    _handleGetRequest(url, setAlunosConsultados);
  };

  const _handleUnitSearch = (event) => {
    const alvo = document.querySelector('#alunoId').value.trim();
    const regex = /^[0-9]/;

    if (!(regex.test(alvo)) && alvo !== "") {
      alert("Somente números são permitidos!")
      event.target.value = "";
    }

    if (alvo === "") {
      setDisableSearch(false);
      setAluno({ id: 0, active: 2 });
    } else {
      setDisableSearch(true);
      setAluno({ id: alvo, active: 2 });
    }
  };

  const _handleActiveSelection = (event) => {
    const value = event.target.value;
    if (value !== 2) {
      setAluno({ id: 0, active: value });
    }
  };

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
              <FormControl id="form-select" disabled={disableSearch} variant="outlined" className={classes.formControl}>
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
                onClick={_handleAlunosConsulta}
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
        <TableSearch hidden alunos={alunosConsultados} />
      </form>
    </Fragment>
  );
};

export default AdmAlunoView;