import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Slide, TextField } from '@material-ui/core';
import React, { forwardRef, useEffect, useState } from 'react';

const Transition = forwardRef(
  function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const CreateData = (props) => {

  const { dados, entidade, classes } = props;
  const [labels, setLabels] = useState([]);
  const [open, setOpen] = useState(false);

  const _handleLabels = () => {
    const props = [];
    for (let prop in dados[0]) {
      if (prop !== "active" && prop !== "programa" && prop !== "id") {
        props.push(prop);
      }
    }
    setLabels(props);
  }

  useEffect(() => {
    console.log(labels);
  }, [labels])

  const _handleClickOpen = () => {
    setOpen(true);
    _handleLabels();
  }

  const _handleClickClose = () => {
    setOpen(false);
    setLabels([])
  }

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        className={classes.addButton}
        onClick={_handleClickOpen}
      >
        Criar {entidade}
      </Button>
      <Dialog
        open={open}
        onClose={_handleClickClose}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="form-creation-dialog-slide-title"
        aria-describedby="form-creation-dialog-slide-description"
      >
        <DialogTitle>Criar {entidade}</DialogTitle>
        <DialogContent>
          <DialogContentText>Para criar um(a) novo(a) {entidade} preencha os campos abaixo e clique em Enviar</DialogContentText>
          <form>
            <FormControl className={classes.FormControl}>
              {labels.map((label, index) => {
                return (
                  <TextField
                    label={label}
                    key={index}
                    variant="outlined"
                  />
                );
              })}
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={_handleClickClose}
          >
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateData;