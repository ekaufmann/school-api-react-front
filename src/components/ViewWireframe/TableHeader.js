import React from 'react';

const TableHeader = ({ headers, classes }) => {

  const _fillHeaders = (headers) => {
    let arr = [];
    let aux;
    for (let prop in headers) {
      aux = prop.charAt(0).toUpperCase() + prop.slice(1);
      if(aux === "Active") {
        aux = "Ativo";
      }
      arr = [...arr, aux];
    }
    arr.push('Ações')
    return arr;
  }

  return (
    <tr>
      {_fillHeaders(headers).map((header, index) => {
        return (
          <th className={classes.tabelaElemento} key={index}>{header}</th>
        );
      })}
    </tr>
  );

};

export default TableHeader;