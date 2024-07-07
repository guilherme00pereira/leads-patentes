import { Button, Table } from "antd";
import { useContext } from "react";
import { FormActionContext } from "../../lib/context.tsx";
import Column from "antd/es/table/Column";
import { searchTableColumns } from "../../config/data.tsx";
import PreTable from "../PreTable.tsx";
import { useLocation } from "react-router-dom";
import { MdOutlineSearch } from "react-icons/md";

const SearchResultTable = () => {
  const { tableData, renderTable, setBlank, setRenderTable, setLoading } =
    useContext(FormActionContext);
  const location = useLocation();

  const goBackButton = () => {
    return (<div className="btn-go-back">
      <Button
        type="primary"
        size="large"
        icon={<MdOutlineSearch />}
        className="form-button"
        style={{
          width: "160px",
          padding: "14px",
          margin: "32px 0",
        }}
        onClick={goBack}
      >
        Nova Busca
      </Button>
      </div>
    );
  };

  const goBack = () => {
    setBlank(true);
    setRenderTable(false);
    setLoading(false);
  };

  return (
    <div className="table-wrapper">
      {location.pathname.includes("/painel/geracao-leads") && renderTable ? goBackButton() : null}
      <PreTable
        total={tableData.length}
        columns={searchTableColumns}
        dataSource={tableData}
      />
      <Table
        pagination={{ position: ["bottomCenter"] }}
        dataSource={tableData}
        rowKey="id"
        scroll={{ x: true }}
      >
        <Column title="Raiz CNPJ" dataIndex="raiz_cnpj" />
        <Column title="CNPJ" dataIndex="cnpj" />
        <Column title="Razão Social" dataIndex="razao_social" />
        <Column title="Nome Fantasia" dataIndex="nome_fantasia" />
        <Column title="UF" dataIndex="uf" />
        <Column title="Município" dataIndex="municipio" />
        <Column title="Bairro" dataIndex="bairro" />
        <Column title="CEP" dataIndex="cep" />
        <Column title="Logradouro" dataIndex="logradouro" />
        <Column title="Número" dataIndex="numero" />
        <Column title="CNAE Principal" dataIndex="cnae_principal" />
        <Column title="Porte" dataIndex="porte" />
        <Column title="Email" dataIndex="email" />
        <Column title="Telefone" dataIndex="telefone" />
        <Column title="Sócios" dataIndex="socios" />
        <Column title="Linkedin" dataIndex="linkedin" />
        <Column title="Facebook" dataIndex="facebook" />
        <Column title="Instagram" dataIndex="instagram" />
      </Table>
    </div>
  );
};

export default SearchResultTable;
