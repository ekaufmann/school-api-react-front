import React, { Fragment, useContext, useEffect, useState } from 'react';
import PageHeader from '../PageHeader';
import { handleGetRequest } from '../../services/httpService/httpService';
import TableSearch from './TableSearch';
import SearchHeader from './SearchHeader';
import EntityContext from '../contexts/Contexts';

const AdmSubView = () => {

  const [actualPage, setActualPage] = useState(0);
  const [idPesquisada, setIdPesquisada] = useState(0);
  const [activeSelecionado, setActiveSelecionado] = useState('');
  const [dadosRecebidos, setDadosRecebidos] = useState({ content: [] });

  const { urlBase, fields } = useContext(EntityContext);

  // componentDidUpdate - GET All students by active
  useEffect(() => {
    let url = urlBase + '?active=' + activeSelecionado + '&page=' + actualPage;
    
    if (idPesquisada > 0 && idPesquisada !== '') {
      url = urlBase + '/' + idPesquisada
    }
    handleGetRequest(url, setDadosRecebidos);
    console.log(dadosRecebidos);
  }, [urlBase, activeSelecionado, actualPage, idPesquisada]);

  return (
    <Fragment>
      <PageHeader saudacao={`Gerenciamento de ${fields.pageHeader}`} />

      <form name="gerencia-dados">

        <SearchHeader
          dadosRecebidos={dadosRecebidos}
          idPesquisada={idPesquisada}
          setIdPesquisada={setIdPesquisada}
          activeSelecionado={activeSelecionado}
          setActiveSelecionado={setActiveSelecionado}
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