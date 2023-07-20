import FormSectionTitle from "../form/FormSectionTitle.tsx";
import {Row, Col} from "antd";
import SelectBasic from "../form/SelectBasic.tsx";
import {naturezaJuridicaSelect} from "../../config/data.tsx";

const SocialActivityForm = () => {
  return (
    <div className="lead-section-container">
      <div style={{width: "100%"}}>
        <Row>
          <Col span={12} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <FormSectionTitle title="Atividades"/>
            <Row>
              <Col span={8} className="leads-cols">
                <SelectBasic name="natjur" label="CNAE" width={300} options={naturezaJuridicaSelect}/>
              </Col>
            </Row>
          </Col>
          <Col span={12} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <FormSectionTitle title="Social"/>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SocialActivityForm;