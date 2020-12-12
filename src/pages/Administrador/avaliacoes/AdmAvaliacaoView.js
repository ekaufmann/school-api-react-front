import { useState } from "react";
import EntityContext from "../../../components/contexts/Contexts";
import AdmSubView from "../../../components/ViewWireframe/AdmSubView";


const AdmAvaliacaoView = () => {

  const [urlBase] = useState('/avaliacoes');

  const [fields] = useState({
    pageHeader: "Avaliações",
    buttonText: "avaliação",
    textField: {
      label: "Avaliação ID",
      title: "Se nenhuma id for informada, a pesquisa retornará todas as avaliações",
    },
    inputLabel: {
      label: "Avaliações",
      title: "Se nehuma opção for escolhida, a pesquisa retornará ativos e inativos"
    },
  });

  const [validator] = useState({
    avaliacao: {
      id: 0,
      disciplinaId: 1,
      conteudo: "",
      dataRealizacao: "",
      active: true
    },
    disciplina: {
      label: "Disciplina",
      helperText: "Disciplina Id precisa ser um número positivo",
      validator: (value) => {
        return (value > 0);
      }
    },
    conteudo: {
      helperText: "Conteúdo precisa ter entre 5 e 64 caracteres",
      validator: (value) => {
        return (value.length < 5 || value.length > 96);
      }
    },
    dataRealizacao: {
      label: "Data de realização",
      type: "date",
      helperText: "A data de realização precisa ser válida",
      validator: (value) => {
        return value > Date.now();
      }
    }
  });

 
  return (
    <EntityContext.Provider value={{urlBase:urlBase, validator:validator, fields:fields}}>
      <AdmSubView />
    </EntityContext.Provider>
  );
};

export default AdmAvaliacaoView;