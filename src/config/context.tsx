import {createContext} from "react";
import {BrandTableData, resultType} from "./types.ts";

export const FormActionContext = createContext<{
    setRenderTable: (newValue: boolean) => void,
    setLoading: (newValue: boolean) => void,
    setBlank: (newValue: boolean) => void,
    tableData: BrandTableData[],
    setTableData: (newValue: BrandTableData[]) => void,
    setRenderResult: (newValue: boolean) => void,
    setResult: (newValue: resultType) => void,
    renderTable: boolean,
    result: resultType,
    loading: boolean,
    blank: boolean,
    renderResult: boolean,
    loadingText: boolean,
    showLoadingText: (newValue: boolean) => void,
}>({
    setRenderTable: () => undefined,
    setLoading: () => undefined,
    setBlank: () => undefined,
    tableData: [],
    setTableData: () => undefined,
    setRenderResult: () => undefined,
    setResult: () => undefined,
    renderTable: false,
    result: {success: false, message: ''},
    loading: false,
    blank: true,
    renderResult: false,
    loadingText: false,
    showLoadingText: () => undefined,
});