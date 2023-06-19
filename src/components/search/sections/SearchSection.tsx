import {useContext, useEffect} from "react";
import { SearchContext } from "../../../config/context.tsx";
import SearchForm from "../form/SearchForm.tsx";

interface SearchProps {
  placeholder?: string;
  label: string;
}

const SearchSection = (props: SearchProps) => {
  const { menu, setLabel, setPlaceholder } = useContext(SearchContext);

  useEffect(() => {
    console.log(props)
    setLabel(props.label);
    props.placeholder ? setPlaceholder(props.placeholder) : setPlaceholder("Insira o dado de busca");
  }, [menu]);

  return (
    <div style={{padding: "20px"}}>
      <SearchForm />
    </div>
  );
};

export default SearchSection;