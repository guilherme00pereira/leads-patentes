import { Row, Col } from "antd";
import FormSectionTitle from "../form/FormSectionTitle.tsx";
import InputField from "../form/InputField.tsx";
import SubmitButton from "../form/SubmitButton.tsx";
import CheckboxField from "../form/CheckboxField.tsx";

const AddUserForm = () => {
  const handleSubmit = () => {
    console.log("Submit");
  };

  return (
    <div className="settings-section-container">
      <FormSectionTitle title="Alterar Usuário" />
      <div style={{ width: "100%" }}>
        <Row>
          <Col span={8} className="">
            <InputField name="name" size="large" width="200px" label="Nome" placeholder="Insira o nome do usuário" required={true} />
            <SubmitButton text="Buscar" isSearch onClick={handleSubmit} />
          </Col>
          <Col span={8} className="">
            <div className="settings-list-checkboxes">
              <CheckboxField name="admin" text="Analytics" />
              <CheckboxField name="admin" text="Ops - Busca Individual" />
              <CheckboxField name="admin" text="Ops - Geração de Leads" />
              <CheckboxField name="admin" text="Ops - Histórico" />
              <CheckboxField name="admin" text="Strategy" />
              <CheckboxField name="admin" text="Integrações" />
              <CheckboxField name="admin" text="Administrador" />
            </div>
          </Col>
          <Col span={8} className="">
            <SubmitButton text="Alterar" onClick={handleSubmit} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AddUserForm;
