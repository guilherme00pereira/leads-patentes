import { Form, Col, Divider, Row } from "antd";
import HeaderSection from "../components/HeaderSection.tsx";
import GeneralFilterForm from "../components/leads/GeneralFilterForm.tsx";
import LocaleForm from "../components/leads/LocaleForm.tsx";
import FinanceLegalForm from "../components/leads/FinancialLegalForm.tsx";
import SubmitButton from "../components/form/SubmitButton.tsx";
import { getLeadsSearch } from "../lib/apiClient.ts";
import { useContext } from "react";
import { FormActionContext } from "../config/context.tsx";
import { SearchTableData } from "../config/types.ts";
import SearchResultTable from "../components/search/SearchResultTable.tsx";
import Loading from "../components/Loading.tsx";
import SocialActivityForm from "../components/leads/SocialActivityForm.tsx";

const LeadGeneration = () => {
  const [form] = Form.useForm();
  const {
    loading,
    blank,
    renderTable,
    setRenderTable,
    setTableData,
    setLoading,
    setBlank,
  } = useContext(FormActionContext);

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        setLoading(true);
        setBlank(false);
        const tableData: SearchTableData[] = [];
        getLeadsSearch(values).then((data: any) => {
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderSection = () => {
    if (blank) {
      return (
        <Form
          form={form}
          layout="vertical"
          requiredMark={false}
          style={{ width: "90%" }}
        >
          <GeneralFilterForm />
          <Divider className="leads-section-divider" />
          <LocaleForm />
          <Divider className="leads-section-divider" />
          <FinanceLegalForm />
          <Divider className="leads-section-divider" />
          <SocialActivityForm />
          <Row>
            <Col span={4} offset={20}>
              <SubmitButton onClick={handleSubmit} />
            </Col>
          </Row>
        </Form>
      );
    } else {
      return renderTable ? <SearchResultTable /> : "";
    }
  };

  return (
    <div className="main-container">
      <HeaderSection title="Geração de Leads" />

      {loading ? <Loading /> : renderSection()}
    </div>
  );
};

export default LeadGeneration;
