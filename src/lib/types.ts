import {IExcelColumn} from "antd-table-saveas-excel/app";

export interface BaseFormProps {
    name: string;
    label: string;
    placeholder?: string;
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

export type AdressApiParams = {
    uf: string;
    municipio: string;
    bairro: string;
    cep: string;
    logradouro: string;
}

export type LeadsApiParams = {
    nleads: string;
    mf: string;
    data_ini: string;
    data_fim: string;
    ativa: string;
    exc_imp: string;
    uf: string;
    municipio: string;
    bairro: string;
    cep: string;
    natjur: string;
    porte: string;
    capmin: string;
    capmax: string;
    cnae: string;
    cnae_secundario: boolean;
    facebook: boolean;
    instagram: boolean;
    linkedin: boolean;
}

export enum IndividualSearchType {
    CNPJ = 1,
    CNPJ_RAIZ = 2,
    NOME_SOCIO = 3,
    CPF = 4,
}

export interface IFormActionContextData {
    blank: boolean,
    setBlank: (newValue: boolean) => void,
    tableData: SearchTableData[],
    setTableData: (newValue: SearchTableData[]) => void,
    renderTable: boolean,
    setRenderTable: (newValue: boolean) => void,
    loading: boolean,
    setLoading: (newValue: boolean) => void
}

export interface ICadrPageContextData {
    backPage: string,
    setBackPage: (newValue: string) => void,
    domain: string,
    setDomain: (newValue: string) => void,
}