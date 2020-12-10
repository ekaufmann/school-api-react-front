import { useState } from "react";
import { DisciplinasContext } from "../../../components/contexts/Contexts";
import AdmSubView from "../../../components/ViewWireframe/AdmSubView";


const AdmDisciplinaView = () => {

  const [urlBase] = useState('/disciplinas');

  const [fields] = useState({
    pageHeader: "Alunos",
    buttonText: "aluno",
    textField: {
      label: "Aluno ID",
      title: "Se nenhuma id for informada, a pesquisa retornará todos os alunos",
    },
    inputLabel: {
      label: "Alunos",
      title: "Se nehuma opção for escolhida, a pesquisa retornará ativos e inativos"
    },
  });

  const [validator] = useState({
    aluno: {
      id: 0,
      nome: "",
      classe: "",
      active: true,
      programa: null,
    },
    nome: {
      helperText: "Nome precisa ter entre 5 e 96 caracteres",
      validator: (value) => {
        return (value.length < 5 || value.length > 96);
      }
    },
    classe: {
      helperText: "Classe precisa ter entre 1 e 64 caracteres",
      validator: (value) => {
        return (value.length < 1 || value.length > 64);
      }
    }
  });

 
  return (
    <DisciplinasContext.Provider value={{urlBase:urlBase, validator:validator, fields:fields}}>
      <AdmSubView context={DisciplinasContext}/>
    </DisciplinasContext.Provider>
  );
};

export default AdmDisciplinaView;