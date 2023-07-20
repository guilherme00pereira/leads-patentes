import axios from "axios";
import {AdressApiParams, IndividualSearchType, LeadsApiParams} from "../config/types.ts";

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

export const getLeadsSearch = async (params: LeadsApiParams) => {
  let url = `${baseUrl}nleads=${params.nleads}&mf=${params.mf}&exc_imp=${params.exc_imp ? '1':'0'}&ativa=${params.ativa ? '1':'0'}&natjur=${params.natjur}&porte=${params.porte}`;
  if (typeof params.data_ini !== 'undefined') url += `&data_ini=${params.data_ini}`;
  if (typeof params.data_fim !== 'undefined') url += `&data_fim=${params.data_fim}`;
  if (typeof params.uf !== 'undefined') url += `&uf=${params.uf}`;
  if (typeof params.municipio !== 'undefined') url += `&municipio=${params.municipio}`;
  if (typeof params.bairro !== 'undefined') url += `&bairro=${params.bairro}`;
  if (typeof params.cep !== 'undefined') url += `&cep=${params.cep}`;
  if (typeof params.capmin !== 'undefined') url += `&capmin=${params.capmin}`;
  if (typeof params.capmax !== 'undefined') url += `&capmax=${params.capmax}`;
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

