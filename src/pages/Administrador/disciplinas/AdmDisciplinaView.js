import { useState } from "react";
import EntityContext from "../../../components/contexts/Contexts";
import AdmSubView from "../../../components/ViewWireframe/AdmSubView";


const AdmDisciplinaView = () => {

  const [urlBase] = useState('/disciplinas');

  const [fields] = useState({
    pageHeader: "Disciplinas",
    buttonText: "disciplina",
    textField: {
      label: "Disciplina ID",
      title: "Se nenhuma id for informada, a pesquisa retornará todas as disciplinas",
    },
    inputLabel: {
      label: "Disciplinas",
      title: "Se nehuma opção for escolhida, a pesquisa retornará ativos e inativos"
    },
  });

  const [validator] = useState({
    disciplina: {
      id: 0,
      nome: "",
      active: true,
      media: 0,
    },
    nome: {
      helperText: "Nome precisa ter entre 5 e 96 caracteres",
      validator: (value) => {
        return (value.length < 5 || value.length > 96);
      }
    },
    media: {
      helperText: "Media precisa ser maior ou igual a 5 e menor ou igual a  7",
      validator: (value) => {
        return (value < 5 || value > 7);
      }
    }
  });


  return (
    <EntityContext.Provider value={{ urlBase: urlBase, validator: validator, fields: fields }}>
      <AdmSubView />
    </EntityContext.Provider>
  );
};

export default AdmDisciplinaView;