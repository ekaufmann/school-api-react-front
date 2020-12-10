import React, { Fragment, useContext, useLayoutEffect, useState } from 'react';
import PageHeader from '../PageHeader';
import { handleGetRequest } from '../../services/httpService/httpService';
import TableSearch from './TableSearch';
import SearchHeader from './SearchHeader';
import EntityContext from '../contexts/Contexts';

const AdmSubView = () => {

  const [page, setPage] = useState(0);
  const [idPesquisada, setIdPesquisada] = useState(0);
  const [activeSelecionado, setActiveSelecionado] = useState('');
  const [dadosRecebidos, setDadosRecebidos] = useState({ content: [] });

  const { urlBase, fields } = useContext(EntityContext);

  // componentDidUpdate - GET All students by active
  useLayoutEffect(() => {
    let url = urlBase + '?active=' + activeSelecionado + '&page=' + page;

    if (idPesquisada > 0 && idPesquisada !== '') {
      url = urlBase + '/' + idPesquisada
    }
    handleGetRequest(url, setDadosRecebidos);
  }, [urlBase, activeSelecionado, page, idPesquisada]);

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
            dados={dadosRecebidos}
            page={page}
            setPage={setPage}
          />
        }
      </form>
    </Fragment>
  );
};

export default AdmSubView;