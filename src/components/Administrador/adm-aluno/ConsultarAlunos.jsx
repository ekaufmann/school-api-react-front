import React from 'react';
import './estilo.css';

const ConsultarAlunos = ({ alunos }) => {

  return (
    <fieldset>
      <legend>Resultado da consulta</legend>
      <table className="tabela">
        <tbody>
          <tr>
            <th className="tabela-elemento">ID</th>
            <th className="tabela-elemento">Nome</th>
            <th className="tabela-elemento">Classe</th>
            <th className="tabela-elemento">Ativo</th>
            <th className="tabela-elemento">Programa</th>
            <th className="tabela-elemento">Ações</th>
          </tr>

          {alunos.map((aluno, index) => {
            return (
              <tr key={index} >
                <td className="tabela-elemento">{aluno.id}</td>
                <td className="tabela-elemento">{aluno.nome}</td>
                <td className="tabela-elemento">{aluno.classe}</td>
                <td className="tabela-elemento">{aluno.active}</td>
                <td className="tabela-elemento">{aluno.programa}</td>
                <td className="tabela-elemento">Botões de modificar e deletar</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </fieldset>
  );
}
export default ConsultarAlunos;