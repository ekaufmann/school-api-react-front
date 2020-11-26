// import { TableBody } from '@material-ui/core';
import React from 'react';
import '../../estilo.js';
import TableHeader from './TableHeader';

const TableSearch = ({ dados, classes }) => {

  if (dados.length === 0) {
    return (null);
  }

  const _fillData = (dados) => {
    let arrFinal = [];
    let arr;
    let active;

    dados.forEach(obj => {
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

  return (
    <fieldset>
      <legend>Resultado da consulta</legend>
      <table className={classes.tabela}>
        <tbody>
          <TableHeader headers={dados[0]} classes={classes} />
          {/* <TableBody dados={dados} /> */}

          {_fillData(dados).map((alunosLinha, index) => {
            return (
              <tr key={index}>
                {alunosLinha.map((dado, index) => {
                  return (
                    <td className={classes.tabelaElemento} key={index}>{dado}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </fieldset>
  );
}
export default TableSearch;