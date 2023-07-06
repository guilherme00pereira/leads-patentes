import {IExcelColumn} from "antd-table-saveas-excel/app";

export interface BaseFormProps {
  name: string;
  label: string;
}

export type SearchTableData = {
  key: number;
  raiz_cnpj: string;
  cnpj: string;
  razao_social: string;
  nome_fantasia: string;
  uf: string;
  municipio: string;
  bairro: string;
  cep: string;
  logradouro: string;
  numero: string;
  cnae_principal: string;
  porte: string;
  email: string;
  telefone: string;
  socios: string;
  linkedin: string;
  qtn_seguidores_linkedin?: string;
  facebook: string;
  qtn_seguidores_facebook?: string;
  instagram: string;
  qtn_seguidores_instagram?: string;
}

export type PreTableParams = {
  total: number;
  columns: IExcelColumn[];
  dataSource: any[];
}

export enum IndividualSearchType {
  CNPJ = 1,
  CNPJ_RAIZ = 2,
  NOME_SOCIO = 3,
  CPF = 4,
}