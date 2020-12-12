import React, { forwardRef } from 'react';
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, FormControl, Slide, TextField, useTheme } from '@material-ui/core';

const Transition = forwardRef(
  function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const PopUp = ({
  open,
  handleOpen,
  handleClose,
  handleInputValidation,
  handleSubmit,
  entidadeNome,
  labels,
  validInput,
  validator
}) => {

  const theme = useTheme();

  const _capitalize = (label) => {
    let string = '';
    const words = label.split();

    words.forEach(word => {
      string += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
    })
    return string.trim();
  }

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        style={theme.custom.button}
      >
        Criar {entidadeNome}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        aria-labelledby="form-creation-dialog-slide-title"
        aria-describedby="form-creation-dialog-slide-description"
      >
        <DialogTitle>Criar {entidadeNome}</DialogTitle>
        <DialogContent>
          <DialogContentText>Para criar um(a) novo(a) {entidadeNome} preencha os campos abaixo e clique em Enviar</DialogContentText>

          <FormControl className="formControl">
            {labels.map((label, index) => {
              if (!validator.hasOwnProperty(label)) {
                return null;
              }
              const type = validator[label].type;

              return (
                <TextField
                  id={entidadeNome + label}
                  label={type === "date" ? validator[label].label : _capitalize(label)}
                  key={index}
                  color={validInput.color}
                  helperText={validator[label].helperText}
                  type={type}
                  variant="outlined"
                  margin="normal"
                  onChange={handleInputValidation}
                  InputLabelProps={type === "date" ? { shrink: true, } : null}
                  fullWidth
                />
              );
            })}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              style={theme.custom.button}
            >
              Criar
            </Button>
          </FormControl>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PopUp;