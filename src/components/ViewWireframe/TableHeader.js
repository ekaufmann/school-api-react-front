import { TableCell, TableHead, TableRow } from '@material-ui/core';
import React from 'react';

const TableHeader = ({ headers }) => {

  const _fillHeaders = (headers) => {
    let arr = [];
    let aux;
    for (let prop of headers) {
      aux = prop.charAt(0).toUpperCase() + prop.slice(1);
      if(aux === "Active") {
        aux = "Ativo";
      }
      arr = [...arr, aux];
    }
    return arr;
  }

  return (
    <TableHead>
      <TableRow>
        {_fillHeaders(headers).map((header, index) => {
          return (
            <TableCell key={index}>{header}</TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );

};

export default TableHeader;