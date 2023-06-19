import {createContext} from "react";
import {SearchTableData} from "./types.ts";

export const FormActionContext = createContext<{
    blank: boolean,
    setBlank: (newValue: boolean) => void,
    tableData: SearchTableData[],
    setTableData: (newValue: SearchTableData[]) => void,
    renderTable: boolean,
    setRenderTable: (newValue: boolean) => void,
    loading: boolean,
    setLoading: (newValue: boolean) => void,
}>({
    blank: true,
    setBlank: () => undefined,
    tableData: [],
    setTableData: () => undefined,
    renderTable: false,
    setRenderTable: () => undefined,
    loading: false,
    setLoading: () => undefined,
});

export const SearchContext = createContext<{
    menu: string,
    setMenu: (newValue: string) => void,
    label: string,
    setLabel: (newValue: string) => void,
    placeholder: string,
    setPlaceholder: (newValue: string) => void,
}>({
    menu: '',
    setMenu: () => undefined,
    label: '',
    setLabel: () => undefined,
    placeholder: 'Insira o dado de busca',
    setPlaceholder: () => undefined,
});