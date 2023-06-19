import {useContext, useState} from 'react'
import {FormActionContext, SearchContext} from '../config/context.tsx'
import HeaderSection from '../components/HeaderSection.tsx'
import SearchMenu from "../components/search/SearchMenu.tsx";
import Loading from "../components/Loading.tsx";
import SearchResultTable from "../components/search/SearchResultTable.tsx";

const IndividualSearch = () => {
  const [label, setLabel] = useState("")
  const [placeholder, setPlaceholder] = useState("")
  const [menu, setMenu] = useState("1")

  const {loading, blank, renderTable} = useContext(FormActionContext)

  const renderSection = () => {
    if (blank) {
      return <div></div>
    } else {
      return renderTable ? <SearchResultTable/> : "";
    }
  }

  return (
    <div className="main-container">
      <SearchContext.Provider value={{
        menu,
        setMenu,
        label,
        setLabel,
        placeholder,
        setPlaceholder
      }}>
        <HeaderSection title="Busca Individual"/>
        <SearchMenu/>
        {loading ? <Loading/> : renderSection()}
      </SearchContext.Provider>
    </div>
  );
};

export default IndividualSearch;