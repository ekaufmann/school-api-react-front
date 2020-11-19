const { makeStyles } = require("@material-ui/core");


const estilo = makeStyles((tema) => ({
  formControl: {
    margin: tema.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: tema.spacing(1),
    minWidth: 100,
  },
  inputLabel: {
    margin: tema.spacing(1, 0),
  },
  addButton: {
    margin: tema.spacing(3, 1),
    minWidth: 100,
  },
  searchButton: {
    margin: tema.spacing(3, 1),
    minWidth: 100,
    color: '#fff',
    backgroundColor: '#4caf50',
    borderColor: '#4caf60',
    boxShadow: '0px 1px 1px 1px rgba(0,0,0,0.2)',
    '&:hover': {
      backgroundColor: '#4caf50',
      borderColor: '#4caf60',
      boxShadow: '0px 2px 4px 1px rgba(0,0,0,0.2)',
    },
    '&:active': {
      boxShadow: '0 0 0 0.2rem rgba(0,255,125,.5)',
      backgroundColor: '#367d39',
      borderColor: '#4caf60',
    },
  },
  tabela: {
    width: '100%',
    borderCollapse: 'collapse',
    border: '1px solid black',
  },
  tabelaElemento: {
    border: '1px solid black',
    padding: '10px',
  }
}));

export default estilo;