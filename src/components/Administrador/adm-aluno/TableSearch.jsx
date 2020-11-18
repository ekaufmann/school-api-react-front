// import { TableBody } from '@material-ui/core';
import React from 'react';
import './estilo.css';
import TableHeader from './TableHeader';

const TableSearch = ({ alunos }) => {

  if (alunos.length === 0) {
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
      <table className="tabela">
        <tbody>
          <TableHeader headers={alunos[0]} />
          {/* <TableBody dados={alunos} /> */}

          {_fillData(alunos).map((alunosLinha, index) => {
            return (
              <tr key={index}>
                {alunosLinha.map((dado, index) => {
                  return (
                    <td className="tabela-elemento" key={index}>{dado}</td>
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