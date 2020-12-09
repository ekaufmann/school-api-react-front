import React, { useState } from 'react';
import AdmSubView from '../../../components/ViewWireframe/AdmSubView';

const AdmMentorView = () => {

  const [fields] = useState({
    pageHeader: "Mentores",
    buttonText: "mentor",
    textField: {
      id: "mentorId",
      label: "Mentor ID",
      title: "Se nenhuma id for informada, a pesquisa retornará todos os mentores",
    },
    inputLabel: {
      id: "select-mentores",
      label: "Mentores",
      title: "Se nehuma opção for escolhida, a pesquisa retornará ativos e inativos"
    },
  });

  const [validator] = useState({
      mentor: {
        id: 0,
        nome: "",
        active: true,
      },
      nome: {
        helperText: "Nome precisa ter entre 5 e 96 caracteres",
        validator: (value) => {
          return (value.length < 5 || value.length > 96);
        },
      }
    });

  return (
    <AdmSubView
      urlBase={'/mentores'}
      validator={validator}
      fields={fields}
    />
  );
};

export default AdmMentorView;