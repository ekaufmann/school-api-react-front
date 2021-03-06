// import { TableBody } from '@material-ui/core';
import { Paper, Table, TableBody, TableCell, TableContainer, TablePagination, TableRow } from '@material-ui/core';
import { useEffect, useLayoutEffect, useState } from 'react';
import '../../estilo.js';
import TableHeader from './TableHeader';
import TableCellCollapsed from './TableCellCollapsed';

const TableSearch = (props) => {

  const { dados, page, setPage } = props;
  const [rowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);

  const [headers, setHeaders] = useState([]);
  const [objects, setObjects] = useState([]);

  const _fillData = (data) => {
    const arrObjData = [];
    let arrFinal = [];
    let arr = [];
    let active;
    let titulos = [];
    let titulosFim = [];

    data.forEach(obj => {
      let aux = [];
      arr = [];

      for (let prop in obj) {
        if (Array.isArray(obj[prop]) || obj[prop] instanceof Object) {
          aux.push(obj[prop]);
          titulosFim.push(prop);
          continue;
        }
        if (prop === "active") {
          active = (obj[prop] === true ? "Ativo" : "Inativo");
        } else {
          active = obj[prop];
        }
        titulos.push(prop);
        arr = [...arr, active];
      }

      arrObjData.push(aux);
      arr.push("Botões");
      titulos.push("Ações");
      arrFinal = [...arrFinal, arr];

      titulos = titulos.concat(titulosFim);
      titulos = titulos.filter((item, index) => titulos.indexOf(item) === index);

    });
    return { arrFinal, arrObjData, titulos };
  }

  useLayoutEffect(() => {
    const { arrFinal, arrObjData, titulos } = _fillData(dados.content);
    setRows(arrFinal);
    setObjects(arrObjData);
    setHeaders(titulos);
  }, [dados.content]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHeader headers={headers} />
          <TableBody>
            {//(rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows)
              rows.map((row, index) => {
                let ind = index * (row.length + objects[index].length);
                ind = (index > 0 ? ind += 1 : ind += 0);
                return (
                  <>
                    <TableRow key={ind}>
                      {row.map((cell) => {
                        ind++;
                        return (
                          <TableCell key={ind}>{/*(cell === null ? cell : cell.nome)*/cell}</TableCell>
                        );
                      })}
                      {objects[index].map((obj) => {
                        ind++;
                        return (
                          <TableCellCollapsed key={ind} cell={obj} />
                        );
                      })}
                    </TableRow>
                  </>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={dados.totalElements ? dados.totalElements : 1}
        rowsPerPageOptions={[]}
        rowsPerPage={rowsPerPage}
        page={page.isNaN ? 0 : page}
        onChangePage={handleChangePage}
      />
    </>
  );
}
export default TableSearch;