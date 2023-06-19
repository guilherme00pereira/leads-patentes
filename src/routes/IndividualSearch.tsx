import {useContext} from 'react'
import {FormActionContext} from '../config/context.tsx'
import HeaderSection from '../components/HeaderSection.tsx'
import SearchMenu from "../components/search/SearchMenu.tsx";
import Loading from "../components/Loading.tsx";
import SearchResultTable from "../components/search/SearchResultTable.tsx";

const IndividualSearch = () => {
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
        <HeaderSection title="Busca Individual"/>
        <SearchMenu/>
        {loading ? <Loading/> : renderSection()}
    </div>
  );
};

export default IndividualSearch;