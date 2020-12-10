import React, { useState } from 'react';
import { MentoriasContext } from '../../../components/contexts/Contexts';
import AdmSubView from '../../../components/ViewWireframe/AdmSubView';

const AdmMentoriaView = () => {

  const [urlBase] = useState('/mentorias')

  const [fields] = useState({
    pageHeader: "Mentorias",
    buttonText: "mentoria",
    textField: {
      id: "mentoriaId",
      label: "Mentoria ID",
      title: "Se nenhuma id for informada, a pesquisa retornará todos as mentorias",
    },
    inputLabel: {
      id: "select-mentorias",
      label: "Mentorias",
      title: "Se nehuma opção for escolhida, a pesquisa retornará ativas e inativas"
    },
  });

  const [validator] = useState({
    mentoria: {
      id: 0,
      aluno: {
        id: 0,
        nome: "",
        classe: "",
        active: true,
        programa: null,
      },
      mentor: {
        id: 0,
        nome: "",
        active: true,
      },
      active: true,
    },
    aluno: {
      helperText: "Id do aluno precisa ser um número válido",
      validator: (value) => {
        return (Number.isInteger(value));
      },
    },
    mentor: {
      helperText: "Id do mentor precisa ser um número válido",
      validator: (value) => {
        return (Number.isInteger(value));
      },
    }
  });

  return (
    <MentoriasContext.Provider value={{urlBase:urlBase, validator:validator, fields:fields}}>
      <AdmSubView
        context={MentoriasContext}
      />
    </MentoriasContext.Provider>
  );
};

export default AdmMentoriaView;