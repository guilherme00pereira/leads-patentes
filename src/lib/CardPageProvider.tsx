import { useState } from "react";
import { CardPageContext } from "./context";


const CardPageProvider = ({children}: {children: React.ReactNode}) => {
    const [backPage, setBackPage] = useState("");
    const [domain, setDomain] = useState("");

    return (
        <CardPageContext.Provider value={
            {
                backPage,
                setBackPage,
                domain,
                setDomain,
            }
        }>
            {children}
            
        </CardPageContext.Provider>
    );
};

export default CardPageProvider;