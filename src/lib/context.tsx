import {createContext, useContext} from "react";
import { ICadrPageContextData, IFormActionContextData } from "./types";

export const FormActionContext = createContext<IFormActionContextData>({
    blank: true,
    setBlank: () => undefined,
    tableData: [],
    setTableData: () => undefined,
    renderTable: false,
    setRenderTable: () => undefined,
    loading: false,
    setLoading: () => undefined,
});

export const CardPageContext = createContext<ICadrPageContextData>({
    backPage: "",
    setBackPage: () => undefined,
    domain: "",
    setDomain: () => undefined,
});

export const useCardPageContext = () => {
    const context = useContext(CardPageContext);
    if (!context) {
      throw new Error("useCardPageContext must be used within a CardPageProvider");
    }
    return context;
  };
