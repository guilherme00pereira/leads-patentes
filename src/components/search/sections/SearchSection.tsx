import { Checkbox, theme } from "antd";
import SearchForm from "../form/SearchForm.tsx";
import { IndividualSearchType } from "../../../config/types.ts";

const { useToken } = theme;

interface SearchProps {
  label: string;
  menu: IndividualSearchType;
  placeholder?: string;
}

const SearchSection = (props: SearchProps) => {
  const { token } = useToken();

  const renderSubSection = () => {
    if (props.menu === IndividualSearchType.NOME_SOCIO) {
      return <Checkbox style={{paddingTop: "20px"}}>Buscar apenas nome exato</Checkbox>;
    }
    if (props.menu === IndividualSearchType.CPF) {
      return (
        <div className="cpf-info">
          <b style={{color: token.colorPrimary }}>Informação:</b> A busca sobre CPF é realizada de forma parcial sobre o
          CPF, o que pode gerar alguns resultados adicionais. Ex: se digitar
          para ser buscado o CPF 123456789-00, serão buscadas todas as empresas
          que os sócios possuem CPF contendo ***456789-**.
        </div>
      );
    }
    return false;
  };

  return (
    <div className="search-wrapper">
      <SearchForm label={props.label} placeholder={props.placeholder} menu={props.menu} />
      {renderSubSection()}
    </div>
  );
};

export default SearchSection;
