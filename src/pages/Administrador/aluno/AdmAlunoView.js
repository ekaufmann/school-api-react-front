import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import React, { Fragment, useEffect, useState } from 'react';
import PageHeader from '../../../components/PageHeader';
import estilo from './estilo';
import { handleGetRequest } from '../../../services/httpService/httpService';
import TableSearch from './TableSearch';
import CreateData from './CreateData';
import { alunoValidators } from '../validatorObjs';


const AdmAlunoView = () => {

  const [classes] = useState(estilo());
  const allAlunos = 2;

  const [idPesquisada, setIdPesquisada] = useState(0);
  const [activeSelecionado, setActiveSelecionado] = useState(2);
  const [disableSelect, setDisableSelect] = useState(false);

  const [dadosRecebidos, setDadosRecebidos] = useState([]);
  const [dadosConsultados, setDadosConsultados] = useState([]);

  // componentDidMount - GET
  useEffect(() => {
    handleGetRequest('./aluno?active=', setDadosRecebidos);
  }, []);

  // componentDidUpdate - Search by Id
  useEffect(() => {
    const pesquisado = dadosRecebidos.filter(obj => obj.id === idPesquisada);
    if (idPesquisada === 0) {
      setDadosConsultados(dadosRecebidos);
    } else if (pesquisado.length === 1) {
      setDadosConsultados(pesquisado);
    } else if (pesquisado.id !== idPesquisada) {
      setDadosConsultados([]);
    }
  }, [idPesquisada, dadosRecebidos])

  // componentDidUpdate - Search by Active
  useEffect(() => {
    const pesquisado = dadosRecebidos.filter(obj => obj.active === !!activeSelecionado);
    if (activeSelecionado === 2) {
      setDadosConsultados(dadosRecebidos);
    } else if (pesquisado.length >= 1) {
      setDadosConsultados(pesquisado);
    } else if (pesquisado.active !== !!activeSelecionado) {
      setDadosConsultados([]);
    }
  }, [activeSelecionado, dadosRecebidos])

  const _handleDisabledSelect = (alvo) => {
    let selection = true;
    if (alvo === "") {
      selection = false;
      setActiveSelecionado(2);
      setIdPesquisada(0);
    } else {
      setIdPesquisada(parseInt(alvo));
    }
    setDisableSelect(selection);
  }

  const _handleUnitSearch = (event) => {
    const alvo = document.querySelector('#alunoid').value.trim();
    const regex = /^[0-9]/;

    if (!(regex.test(alvo)) && alvo !== "") {
      alert("Somente números são permitidos!")
      event.target.value = "";
    }
    _handleDisabledSelect(alvo);
  };

  const _handleActiveSelection = (event) => {
    const value = event.target.value;
    setActiveSelecionado(value);
  };

  return (
    <Fragment>
      <PageHeader saudacao="Gerenciamento de Alunos" />

      <form name="gerencia-alunos">
        <fieldset>
          <legend>Consultar alunos:</legend>

          <Box display="flex">
            <Box justifyContent="flex-start" alignItems="flex-start" >
              <TextField
                id="alunoid"
                name="id"
                label="ID Aluno"
                variant="outlined"
                margin="normal"
                title="Se nenhuma id for informada, a pesquisa retornará todos os alunos"
                onChange={_handleUnitSearch}

              />
              <FormControl id="form-select" disabled={disableSelect} variant="outlined" className={classes.formControl}>
                <InputLabel id="select-alunos" className={classes.inputLabel}>Alunos</InputLabel>
                <Select
                  title="Se nehuma opção for escolhida, a pesquisa retornará ativos e inativos"
                  labelId="select-alunos"
                  id="select-alunos"
                  label="Alunos"
                  defaultValue={allAlunos}
                  className={classes.selectEmpty}
                  onChange={_handleActiveSelection}
                >
                  <MenuItem value={allAlunos}>Todos</MenuItem>
                  <MenuItem value={0}>Inativos</MenuItem>
                  <MenuItem value={1}>Ativos</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box flexGrow={1}></Box>

            <Box justifyContent="flex-end" >
              <CreateData
                dados={dadosRecebidos}
                setDados={setDadosRecebidos}
                entidadeNome={"aluno"}
                classes={classes}
                validator={alunoValidators}
                postUrl={'./aluno'}
              />
            </Box>
          </Box>
        </fieldset>
        <br />
        <TableSearch hidden dados={dadosConsultados} classes={classes} />
      </form>
    </Fragment>
  );
};

export default AdmAlunoView;