import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, FormControl, Slide, TextField } from '@material-ui/core';
import React, { forwardRef, useState } from 'react';
import { handlePostRequest } from '../../../services/httpService/httpService';

const Transition = forwardRef(
  function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const CreateData = (props) => {

  const { dados, entidade, entidadeNome, classes, validator, postUrl } = props;
  const [labels, setLabels] = useState([]);
  const [open, setOpen] = useState(false);
  const [validInput, setValidInput] = useState({ valid: false, color: "secondary" });

  const _handleLabels = () => {
    const props = [];
    for (let prop in dados[0]) {
      if (prop !== "active" && prop !== "programa" && prop !== "id") {
        props.push(prop);
      }
    }
    setLabels(props);
  }

  const _handleClickOpen = () => {
    setOpen(true);
    _handleLabels();
  }

  const _handleClickClose = () => {
    setOpen(false);
  }

  const _handleInputValidation = (event) => {
    const targetInput = event.target;
    const obj = { valid: true, color: "primary", helperText: "" };
    const prop = targetInput.id.slice(entidadeNome.length);
    const entityValidator = validator[prop];

    if (entityValidator.validator(targetInput.value)) {
      obj.valid = false;
      obj.color = "secondary";
    } else {
      obj.valid = true;
      obj.color = "primary";
    }
    setValidInput(obj);
  }

  const _handleSubmit = () => {
    const entidadeAux = entidade;
    for (let prop in entidadeAux) {
      const input = document.querySelector(`#${entidadeNome + prop}`);
      if (input && validInput.valid) {
        entidadeAux[prop] = input.value;
      } else if (input) {
        entidadeAux[prop] = "";
      }
    }
    if (entidadeAux.nome && entidadeAux.classe) {
      entidadeAux.id = dados[dados.length - 1].id + 1;
      dados.push(entidadeAux);
      const obj = { nome: entidadeAux.nome, classe: entidadeAux.classe };
      handlePostRequest(postUrl, obj);
    }

  }

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        className={classes.addButton}
        onClick={_handleClickOpen}
      >
        Criar {entidadeNome}
      </Button>
      <Dialog
        open={open}
        onClose={_handleClickClose}
        TransitionComponent={Transition}
        aria-labelledby="form-creation-dialog-slide-title"
        aria-describedby="form-creation-dialog-slide-description"
      >
        <DialogTitle>Criar {entidadeNome}</DialogTitle>
        <DialogContent>
          <DialogContentText>Para criar um(a) novo(a) {entidadeNome} preencha os campos abaixo e clique em Enviar</DialogContentText>

          <FormControl className={classes.FormControl}>
            {labels.map((label, index) => {
              return (
                <TextField
                  id={entidadeNome + label}
                  label={label}
                  key={index}
                  color={validInput.color}
                  helperText={validator[label].helperText}
                  variant="outlined"
                  margin="normal"
                  onChange={_handleInputValidation}
                />
              );
            })}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.addButton}
              onClick={_handleSubmit}
            >
              Criar
            </Button>
          </FormControl>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateData;