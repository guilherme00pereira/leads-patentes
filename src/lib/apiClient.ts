import axios from "axios";
import {AdressApiParams, IndividualSearchType} from "../config/types.ts";

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
  return await sendRequest(url);
};

export const getAddressSearch = async (params: AdressApiParams) => {
  let url = `${baseUrl}tipo_busca=5&uf=${params.uf}&municipio=${params.municipio}`;
  if (params.bairro) url += `&bairro=${params.bairro}`;
  if (params.cep) url += `&cep=${params.cep}`;
  if (params.logradouro) url += `&logradouro=${params.logradouro}`;
  return await sendRequest(url);
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
