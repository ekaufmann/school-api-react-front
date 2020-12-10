export const _fillHeadersFromObj = (headers) => {
  let arr = [];
  let aux;
  for (let prop in headers) {
    aux = prop.charAt(0).toUpperCase() + prop.slice(1);
    if(aux === "Active") {
      aux = "Ativo";
    }
    arr = [...arr, aux];
  }
  return arr;
};