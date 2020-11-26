import React, { useState } from 'react';
import AdmSubView from '../../../components/ViewWireframe/AdmSubView';


const AdmAlunoView = () => {

  const [fields] = useState({
    pageHeader: "Alunos",
    buttonText: "aluno",
    textField: {
      id: "alunoId",
      label: "Aluno ID",
      title: "Se nenhuma id for informada, a pesquisa retornará todos os alunos",
    },
    inputLabel: {
      id: "select-alunos",
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
    <AdmSubView
      getUrl={"/aluno?active="}
      postUrl={"/aluno"}
      fields={fields}
      validator={validator}
    />
  );
}

export default AdmAlunoView;

//   const [classes] = useState(estilo());
//   const allAlunos = 2;

//   const [idPesquisada, setIdPesquisada] = useState(0);
//   const [activeSelecionado, setActiveSelecionado] = useState(2);
//   const [disableSelect, setDisableSelect] = useState(false);

//   const [dadosRecebidos, setDadosRecebidos] = useState([]);
//   const [dadosConsultados, setDadosConsultados] = useState([]);

//   // componentDidMount - GET
//   useEffect(() => {
//     handleGetRequest('./aluno?active=', setDadosRecebidos);
//   }, []);

//   // componentDidUpdate - Search by Id
//   useEffect(() => {
//     const pesquisado = dadosRecebidos.filter(obj => obj.id === idPesquisada);
//     if (idPesquisada === 0) {
//       setDadosConsultados(dadosRecebidos);
//     } else if (pesquisado.length === 1) {
//       setDadosConsultados(pesquisado);
//     } else if (pesquisado.id !== idPesquisada) {
//       setDadosConsultados([]);
//     }
//   }, [idPesquisada, dadosRecebidos])

//   // componentDidUpdate - Search by Active
//   useEffect(() => {
//     const pesquisado = dadosRecebidos.filter(obj => obj.active === !!activeSelecionado);
//     if (activeSelecionado === 2) {
//       setDadosConsultados(dadosRecebidos);
//     } else if (pesquisado.length >= 1) {
//       setDadosConsultados(pesquisado);
//     } else if (pesquisado.active !== !!activeSelecionado) {
//       setDadosConsultados([]);
//     }
//   }, [activeSelecionado, dadosRecebidos])

//   const _handleDisabledSelect = (alvo) => {
//     let selection = true;
//     if (alvo === "") {
//       selection = false;
//       setActiveSelecionado(2);
//       setIdPesquisada(0);
//     } else {
//       setIdPesquisada(parseInt(alvo));
//     }
//     setDisableSelect(selection);
//   }

//   const _handleUnitSearch = (event) => {
//     const alvo = document.querySelector('#alunoid').value.trim();
//     const regex = /^[0-9]/;

//     if (!(regex.test(alvo)) && alvo !== "") {
//       alert("Somente números são permitidos!")
//       event.target.value = "";
//     }
//     _handleDisabledSelect(alvo);
//   };

//   const _handleActiveSelection = (event) => {
//     const value = event.target.value;
//     setActiveSelecionado(value);
//   };

//   return (
//     <Fragment>
//       <PageHeader saudacao="Gerenciamento de Alunos" />

//       <form name="gerencia-alunos">
//         <fieldset>
//           <legend>Consultar alunos:</legend>

//           <Box display="flex">
//             <Box justifyContent="flex-start" alignItems="flex-start" >
//               <TextField
//                 id="alunoid"
//                 name="id"
//                 label="ID Aluno"
//                 variant="outlined"
//                 margin="normal"
//                 title="Se nenhuma id for informada, a pesquisa retornará todos os alunos"
//                 onChange={_handleUnitSearch}

//               />
//               <FormControl id="form-select" disabled={disableSelect} variant="outlined" className={classes.formControl}>
//                 <InputLabel id="select-alunos" className={classes.inputLabel}>Alunos</InputLabel>
//                 <Select
//                   title="Se nehuma opção for escolhida, a pesquisa retornará ativos e inativos"
//                   labelId="select-alunos"
//                   id="select-alunos"
//                   label="Alunos"
//                   defaultValue={allAlunos}
//                   className={classes.selectEmpty}
//                   onChange={_handleActiveSelection}
//                 >
//                   <MenuItem value={allAlunos}>Todos</MenuItem>
//                   <MenuItem value={0}>Inativos</MenuItem>
//                   <MenuItem value={1}>Ativos</MenuItem>
//                 </Select>
//               </FormControl>
//             </Box>

//             <Box flexGrow={1}></Box>

//             <Box justifyContent="flex-end" >
//               <CreateData
//                 dados={dadosRecebidos}
//                 setDados={setDadosRecebidos}
//                 entidadeNome={"aluno"}
//                 classes={classes}
//                 validator={alunoValidators}
//                 postUrl={'./aluno'}
//               />
//             </Box>
//           </Box>
//         </fieldset>
//         <br />
//         <TableSearch hidden dados={dadosConsultados} classes={classes} />
//       </form>
//     </Fragment>
//   );
// };