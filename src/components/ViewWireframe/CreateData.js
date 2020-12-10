import React, { useContext, useState } from 'react';
import PopUp from '../PopUp/PopUp';
import { handlePostRequest } from '../../services/httpService/httpService';
import EntityContext from '../contexts/Contexts';


const CreateData = (props) => {

  const { urlBase, validator } = useContext(EntityContext)
  const { dados, entidadeNome } = props;
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
    const entidadeAux = validator[entidadeNome];
    for (let prop in entidadeAux) {
      const input = document.querySelector(`#${entidadeNome + prop}`);
      if (input && validInput.valid) {
        entidadeAux[prop] = input.value;
      } else if (input) {
        entidadeAux[prop] = "";
      }
    }

    if (validInput.valid) {
      entidadeAux.id = dados[dados.length - 1].id + 1;
      const postUrl = urlBase;

      console.log(entidadeAux);
      handlePostRequest(postUrl, entidadeAux);
      _handleClickClose();
    }

  }

  return (
    <PopUp
      open={open}
      handleOpen={_handleClickOpen}
      handleClose={_handleClickClose}
      handleInputValidation={_handleInputValidation}
      handleSubmit={_handleSubmit}
      entidadeNome={entidadeNome}
      labels={labels}
      validInput={validInput}
      validator={validator}
    />
  );
};

export default CreateData;