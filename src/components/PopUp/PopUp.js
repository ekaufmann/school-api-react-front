import React, { forwardRef } from 'react';
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, FormControl, Slide, TextField } from '@material-ui/core';

const Transition = forwardRef(
  function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const PopUp = ({
  open,
  classes,
  handleOpen,
  handleClose,
  handleInputValidation,
  handleSubmit,
  entidadeNome,
  labels,
  validInput,
  validator
}) => {

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        className={classes.addButton}
        onClick={handleOpen}
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
                  onChange={handleInputValidation}
                  fullWidth
                />
              );
            })}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.addButton}
              onClick={handleSubmit}
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