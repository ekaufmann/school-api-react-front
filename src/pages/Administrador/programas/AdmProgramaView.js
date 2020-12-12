import { useState } from "react";
import EntityContext from "../../../components/contexts/Contexts";
import AdmSubView from "../../../components/ViewWireframe/AdmSubView";


const AdmProgramaView = () => {

  const [urlBase] = useState('/programas')

  const [fields] = useState({
    pageHeader: "Programas",
    buttonText: "programa",
    textField: {
      label: "Programa ID",
      title: "Se nenhuma id for informada, a pesquisa retornará todos os programass",
    },
    inputLabel: {
      label: "Programas",
      title: "Se nehuma opção for escolhida, a pesquisa retornará ativos e inativos"
    },
  });

  const [validator] = useState({
    programa: {
      id: 0,
      nome: "",
      dataInicio: "",
      dataFim: "",
      active: true,
    },
    nome: {
      helperText: "Nome precisa ter entre 5 e 96 caracteres",
      validator: (value) => {
        return (value.length < 5 || value.length > 96);
      }
    },
    dataInicio: {
      label: "Data Início",
      type: "date",
      helperText: "Precisa ser uma data válida",
      validator: (value) => {
        console.log(value > Date.now())
        return value > Date.now();
      }
    },
    dataFim: {
      label: "Data fim",
      type: "date",
      helperText: "Precisa ser uma data válida",
      validator: (value) => {
        return value > Date.now();
      }
    }
  });

  return (
    <EntityContext.Provider value={{ urlBase: urlBase, validator: validator, fields: fields }}>
      <AdmSubView />
    </EntityContext.Provider>
  );
}

export default AdmProgramaView;