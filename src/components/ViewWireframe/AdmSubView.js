import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import React, { Fragment, useEffect, useState } from 'react';
import PageHeader from '../PageHeader';
import estilo from '../../estilo';
import { handleGetRequest } from '../../services/httpService/httpService';
import TableSearch from './TableSearch';
import CreateData from './CreateData';


const AdmSubView = ({ getUrl, postUrl, validator, fields }) => {

  const [classes] = useState(estilo());
  const allData = 2;

  const [idPesquisada, setIdPesquisada] = useState(0);
  const [activeSelecionado, setActiveSelecionado] = useState(2);
  const [disableSelect, setDisableSelect] = useState(false);

  const [dadosRecebidos, setDadosRecebidos] = useState([]);
  const [dadosConsultados, setDadosConsultados] = useState([]);

  // componentDidMount - GET
  useEffect(() => {
    handleGetRequest(getUrl, setDadosRecebidos);
  }, [getUrl]);

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
    const alvo = event.target.value.trim();
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
      <PageHeader saudacao={`Gerenciamento de ${fields.pageHeader}`} />

      <form name="gerencia-dados">
        <fieldset>
          <legend>Consultar alunos:</legend>

          <Box display="flex">
            <Box justifyContent="flex-start" alignItems="flex-start" >
              <TextField
                id={fields.textField.id}
                name="id"
                label={fields.textField.label}
                variant="outlined"
                margin="normal"
                title={fields.textField.title}
                onChange={_handleUnitSearch}

              />
              <FormControl id="form-select" disabled={disableSelect} variant="outlined" className={classes.formControl}>
                <InputLabel id={fields.inputLabel.id} className={classes.inputLabel}>{fields.pageHeader}</InputLabel>
                <Select
                  title={fields.inputLabel.title}
                  labelId={fields.inputLabel.id}
                  id={fields.inputLabel.id}
                  label={fields.pageHeader}
                  defaultValue={allData}
                  className={classes.selectEmpty}
                  onChange={_handleActiveSelection}
                >
                  <MenuItem value={allData}>Todos</MenuItem>
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
                entidadeNome={fields.buttonText}
                classes={classes}
                validator={validator}
                postUrl={postUrl}
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

export default AdmSubView;