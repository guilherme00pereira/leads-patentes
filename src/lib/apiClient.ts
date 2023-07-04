import axios from "axios";
import { IndividualSearchType } from "../config/types.ts";

const baseUrl =
  "https://p9z6qoneoc.execute-api.us-east-1.amazonaws.com/teste/appleads?";

export const getIndividualSearch = async (
  searchType: IndividualSearchType,
  value: string,
  searchExact?: boolean
) => {
  let url = `${baseUrl}tipo_busca=${searchType}&`;

  switch (searchType) {
    case IndividualSearchType.CNPJ:
      url += `cnpj=${value}`;
      break;
    case IndividualSearchType.CNPJ_RAIZ:
      url += `cnpj_raiz=${value}`;
      break;
    case IndividualSearchType.NOME_SOCIO:
      url += `nome_socio=${value}&nome_exato=${searchExact ? "1" : "0"}`;
      break;
    case IndividualSearchType.CPF:
      url += `cpf=${value}`;
      break;
  }
  const response = await sendRequest(url);
  return response.data;
};

export const getAddressSearch = async () => {
  const url = `${baseUrl}tipo_busca=5&`;
  const response = await sendRequest(url);
  return response.data;
};

const sendRequest = async (url: string) => {
  const response = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const getMockData = async (type: string) => {

  const res = await fetch(`./appleads${type}.json`).then(res => res.json())
  return res
};
