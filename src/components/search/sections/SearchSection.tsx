import { Checkbox, theme } from "antd";
import SearchForm from "../form/SearchForm.tsx";

const { useToken } = theme;

interface SearchProps {
  label: string;
  menu: string;
  placeholder?: string;
}

const SearchSection = (props: SearchProps) => {
  const { token } = useToken();

  const renderSubSection = () => {
    console.log(props);
    if (props.menu === "3") {
      return <Checkbox>Buscar apenas nome exato</Checkbox>;
    }
    if (props.menu === "4") {
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
      <SearchForm label={props.label} placeholder={props.placeholder} />
      {renderSubSection()}
    </div>
  );
};

export default SearchSection;
