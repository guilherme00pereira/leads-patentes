import {IExcelColumn} from "antd-table-saveas-excel/app";

export type SearchTableData = {
  id: string;
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

export type columnType = {
  title: string,
  dataIndex: string,
}

export type resultType = {
  success: boolean,
  message: string,
}