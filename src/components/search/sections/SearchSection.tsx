import { useContext } from "react";
import { Col, Form, Row, theme } from "antd";
import SearchForm from "../form/SearchForm.tsx";
import {
  IndividualSearchType,
  SearchTableData,
} from "../../../lib/types.ts";
import { FormActionContext } from "../../../lib/context.tsx";
import { getIndividualSearch } from "../../../lib/apiClient.ts";
import CheckboxField from "../../form/CheckboxField.tsx";

const { useToken } = theme;

interface SearchProps {
  label: string;
  menu: IndividualSearchType;
  placeholder?: string;
}

const SearchSection = (props: SearchProps) => {
  const [form] = Form.useForm();
  const { token } = useToken();
  const { setRenderTable, setTableData, setLoading, setBlank } =
    useContext(FormActionContext);

  const renderCheckbox = () => {
    if (props.menu === IndividualSearchType.NOME_SOCIO) {
      return (
        <CheckboxField name="buscar_nome_exato" text="Buscar nome exato" />
      );
    }
  };

  const renderText = () => {
    if (props.menu === IndividualSearchType.CPF) {
      return (
        <div className="cpf-info">
          <b style={{ color: token.colorPrimary }}>Informação:</b> A busca sobre
          CPF é realizada de forma parcial sobre o CPF, o que pode gerar alguns
          resultados adicionais. Ex: se digitar para ser buscado o CPF
          123456789-00, serão buscadas todas as empresas que os sócios possuem
          CPF contendo ***456789-**.
        </div>
      );
    }
  };

  const handleSubmit = () => {
    form
      .validateFields()
      .then((param) => {
        setLoading(true);
        setBlank(false);
        const tableData: SearchTableData[] = [];
        let result: any = null;
        switch (props.menu) {
          case IndividualSearchType.NOME_SOCIO:
            result = getIndividualSearch(
              props.menu,
              param.termo,
              param.buscar_nome_exato
            );
            break;
          default:
            result = getIndividualSearch(props.menu, param.termo);
            break;
        }

        if (result) {
          result.then((data: any) => {
            Object.entries(data.body).forEach((item: any, index: number) => {
              tableData.push({
                key: index,
                raiz_cnpj: item[1].cnpj_basico,
                cnpj: item[1].cnpj,
                razao_social: item[1].razao_social,
                nome_fantasia: item[1].nome_fantasia,
                uf: item[1].uf,
                municipio: item[1].cod_mun,
                bairro: item[1].bairro,
                cep: item[1].cep,
                logradouro: item[1].lograd,
                numero: item[1].numero,
                cnae_principal: item[1].cnae_principal,
                porte: item[1].porte,
                email: item[1].email,
                telefone: item[1].telefone,
                socios: item[1].lista_socios,
                linkedin: item[1].linkedin,
                facebook: item[1].facebook,
                instagram: item[1].instagram,
              });
            });
            setLoading(false);
            setRenderTable(true);
            setTableData([...tableData]);
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="search-wrapper">
      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        style={{ alignItems: "center", width: "420px" }}
      >
        <Row style={{ alignItems: "center", width: "100%" }}>
          <Col span={24} style={{display: "inline-flex", justifyContent: "space-evenly", width: "80%", alignItems: "center"}}>
          <SearchForm
            label={props.label}
            placeholder={props.placeholder}
            menu={props.menu}
            handler={handleSubmit}
          />
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={6}>{renderCheckbox()}</Col>
        </Row>
      </Form>
      <div>
        {renderText()}
      </div>
    </div>
  );
};

export default SearchSection;
