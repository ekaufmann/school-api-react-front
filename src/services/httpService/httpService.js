import axios from 'axios';

const httpService = axios.create({
  baseURL: "http://localhost:8080/",
});

export const handleGetRequest = (url, func) => {
  httpService.get(url)
    .then((response) => {
      let dados = response.data;
      if (!Array.isArray(dados)) {
        dados = [dados];
      }
      func(dados);
    }).catch((error) => {
      console.error(error);
    })
};

export const handlePostRequest = (url, obj) => {
  httpService.post(url, obj)
    .then(({ data }) => {
      console.log(data);
    })
    .catch(({error}) => {
      console.error(error);
    })
};

export default httpService;