import FormSectionTitle from "../form/FormSectionTitle.tsx";
import { Row, Col } from "antd";
//import { naturezaJuridicaSelect } from "../../config/data.tsx";
import CheckboxField from "../form/CheckboxField.tsx";
import SelectCnaes from "../form/SelectCnaes.tsx";

const SocialActivityForm = () => {
  return (
    <div className="lead-section-container">
      <div style={{ width: "100%" }}>
        <Row>
          <Col
            span={12}
            className="leads-activity-social-section"
            style={{ borderRight: "1px solid #494CA8" }}
          >
            <FormSectionTitle title="Atividades" />
            <Row>
              <Col span={8} className="leads-cols">
                <SelectCnaes size="middle"  />
              </Col>
            </Row>
            <Row>
              <Col span={24} className="leads-cols">
                <CheckboxField
                  name="cnae_secundario"
                  text="Incluir buscas em CNAEs Secundários"
                />
              </Col>
            </Row>
          </Col>
          <Col span={12} className="leads-activity-social-section">
            <FormSectionTitle title="Social" />
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
              <Row>
                <Col span={24} style={{ flexDirection: "column" }}>
                  <CheckboxField
                    name="facebook"
                    text="Apenas empresa com Facebook"
                  />
                </Col>
              </Row>
              <Row style={{ marginTop: "-28px" }}>
                <Col span={24} style={{ flexDirection: "column" }}>
                  <CheckboxField
                    name="instagram"
                    text="Apenas empresa com Instagram"
                  />
                </Col>
              </Row>
              <Row style={{ marginTop: "-28px" }}>
                <Col span={24} style={{ flexDirection: "column" }}>
                  <CheckboxField
                    name="linkedin"
                    text="Apenas empresa com Linkedin"
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SocialActivityForm;
