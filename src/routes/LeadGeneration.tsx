import {Form, Col, Divider, Row} from "antd"
import HeaderSection from "../components/HeaderSection.tsx";
import GeneralFilterForm from "../components/leads/GeneralFilterForm.tsx";
import LocaleForm from "../components/leads/LocaleForm.tsx";
import FinanceLegalForm from "../components/leads/FinancialLegalForm.tsx";
import SubmitButton from "../components/form/SubmitButton.tsx";
const LeadGeneration = () => {
    const [form] = Form.useForm();
    const handleSubmit = () => {
        console.log("submit")
    }

    return (
      <div className="main-container">
          <HeaderSection title="Geração de Leads"/>
          <Form
              form={form}
              layout="vertical"
              requiredMark="optional"
              style={{ width: "90%" }}
          >
            <GeneralFilterForm />
            <Divider className="leads-section-divider" />
            <LocaleForm />
            <Divider className="leads-section-divider" />
            <FinanceLegalForm />
            <Row>
                <Col span={6} offset={16}>
                    <SubmitButton onClick={handleSubmit} />
                </Col>
            </Row>
          </Form>
        </div>
    );
};

export default LeadGeneration;