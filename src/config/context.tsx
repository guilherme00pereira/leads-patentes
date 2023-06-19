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
