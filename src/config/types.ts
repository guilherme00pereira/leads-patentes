import {IExcelColumn} from "antd-table-saveas-excel/app";

export type BrandTableData = {
  id: string;
  class: string;
  process: string;
  brand: string;
  presentation?: string;
  situation?: string;
  name?: string;
  activities?: string;
  country?: string;
  state?: string;
  complement?: string;
  rpi?: string
  dataRpi?: string
}


export type GeneralSearchParams = {
  termo: string;
  classe: string;
  situacao: string;
}

export type RadicalSearchParams = {
  and1: string;
  and2?: string;
  and3?: string;
  or1?: string;
  or2?: string;
  or3?: string;
  not1?: string;
  not2?: string;
  not3?: string;
  classe: string;
  situacao: string;
}

export type DistanceSearchParams = {
  termo: string;
  classe: string;
  situacao: string;
  distance: string;
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