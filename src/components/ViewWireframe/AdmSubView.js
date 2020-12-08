import React, { Fragment, useEffect, useState } from 'react';
import PageHeader from '../PageHeader';
import { handleGetRequest } from '../../services/httpService/httpService';
import TableSearch from './TableSearch';
import SearchHeader from './SearchHeader';


const AdmSubView = ({ urlGet, urlPost, validator, fields }) => {

  const [actualPage, setActualPage] = useState(0);
  const [idPesquisada, setIdPesquisada] = useState(0);
  const [activeSelecionado, setActiveSelecionado] = useState('');


  const [dadosRecebidos, setDadosRecebidos] = useState({ content: [] });
  const [dadosConsultados, setDadosConsultados] = useState([]);

  // useEffect(() => {
  //   handleGetRequest(urlGet, setDadosRecebidos);
  // }, [urlGet]);

  // componentDidUpdate - GET
  useEffect(() => {
    const url = urlGet + activeSelecionado + '&page=' + actualPage;
    handleGetRequest(url, setDadosRecebidos);
  }, [urlGet, activeSelecionado, actualPage]);

  return (
    <Fragment>
      <PageHeader saudacao={`Gerenciamento de ${fields.pageHeader}`} />

      <form name="gerencia-dados">

        <SearchHeader
          fields={fields}
          dadosRecebidos={dadosRecebidos}
          idPesquisada={idPesquisada}
          setIdPesquisada={setIdPesquisada}
          activeSelecionado={activeSelecionado}
          setActiveSelecionado={setActiveSelecionado}
          postUrl={urlPost}
          validator={validator}
        />

        <br />
        {dadosRecebidos.content.length === 0 ? null :
          <TableSearch
            content={dadosRecebidos.content}
            page={actualPage}
            setPage={setActualPage}
            totalPages={dadosRecebidos.totalPages}
          />}
      </form>
    </Fragment>
  );
};

export default AdmSubView;