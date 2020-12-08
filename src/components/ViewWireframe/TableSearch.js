// import { TableBody } from '@material-ui/core';
import { Paper, Table, TableBody, TableCell, TableContainer, TablePagination, TableRow } from '@material-ui/core';
import { useEffect, useState } from 'react';
import '../../estilo.js';
import TableHeader from './TableHeader';

const TableSearch = (props) => {

  const {content, page, setPage, totalPages} = props;
  const [rows, setRows] = useState([]);
  const [rowsPerPage] = useState(10);
  //const [page, setPage] = useState(0);

  const _fillData = (data) => {
    let arrFinal = [];
    let arr;
    let active;

    data.forEach(obj => {
      arr = [];
      for (let prop in obj) {
        if (prop === "active" || prop === "Ativo") {
          active = (obj[prop] === true ? "Ativo" : "Inativo");
        } else {
          active = obj[prop];
        }
        arr = [...arr, active];
      }
      arr.push("Botões")
      arrFinal = [...arrFinal, arr];
    });
    return arrFinal;
  }

  useEffect(() => {
    setRows(_fillData(content));
  }, [content]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHeader headers={content[0]} />
          <TableBody>
            {(rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows)
              .map((row, index) => {
                return (
                  <TableRow key={index}>
                    {row.map((dado, index) => {
                      return (
                        <TableCell key={index}>{(dado === null || dado.nome === undefined ? dado : dado.nome)}</TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={totalPages * rowsPerPage}
        rowsPerPageOptions={[]}
        rowsPerPage={rowsPerPage}
        page={page ? 0 : page}
        onChangePage={handleChangePage}
      />
    </>
  );
}
export default TableSearch;