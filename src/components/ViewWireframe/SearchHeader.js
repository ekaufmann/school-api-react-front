import { useState } from "react";
import CreateData from "./CreateData";

import { Paper, useTheme, Box, TextField, MenuItem, FormControl, Select, InputLabel, Typography } from "@material-ui/core";


const SearchHeader = (
  { fields,
    dadosRecebidos,
    setDadosRecebidos,
    setIdPesquisada,
    setActiveSelecionado,
    postUrl,
    validator
  }) => {

  const [allData] = useState('');
  const theme = useTheme();
  const [disableSelect, setDisableSelect] = useState(false);


  const _handleDisabledSelect = (alvo) => {
    let selection = true;
    if (alvo === "") {
      selection = false;
      setActiveSelecionado('');
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
    <Box component={Paper} p={2}>
      <Typography component="h2" align="left" style={{ 'fontWeight': 'bolder' }}>Consultar {fields.pageHeader}:</Typography>

      <Box display="flex">
        <Box justifyContent="flex-start" alignItems="flex-start" >
          <TextField
            id="textlField-id"
            name="id"
            label={fields.textField.label}
            variant="outlined"
            margin="normal"
            title={fields.textField.title}
            onChange={_handleUnitSearch}

          />
          <FormControl id="form-select" disabled={disableSelect} variant="outlined" style={theme.custom.formControl}>
            <InputLabel id="select-id" style={theme.custom.inputLabel}>{fields.pageHeader}</InputLabel>
            <Select
              title={fields.inputLabel.title}
              labelId="select-id"
              id="select-id"
              label={fields.pageHeader}
              defaultValue={allData}
              style={theme.custom.selectEmpty}
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
            dados={dadosRecebidos.content}
            setDados={setDadosRecebidos}
            entidadeNome={fields.buttonText}
            validator={validator}
            postUrl={postUrl}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default SearchHeader;