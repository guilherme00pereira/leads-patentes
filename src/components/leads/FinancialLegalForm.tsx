import FormSectionTitle from "../form/FormSectionTitle.tsx";
import { Row, Col } from "antd";
import SelectBasic from "../form/SelectBasic.tsx";
import { naturezaJuridicaSelect, porteSelect } from "../../config/data.tsx";
import InputAddonField from "../form/InputAddonField.tsx";

const FinancialLegalForm = () => {
  return (
    <>
      <FormSectionTitle title="Jurídico/Financeiro" />
        <Row>
          <Col span={12} className="leads-cols">
            <SelectBasic name="natjur" label="Natureza Jurídica" width={300} options={naturezaJuridicaSelect} />
          </Col>
          <Col span={12} className="leads-cols">
            <SelectBasic name="porte" label="Porte" options={porteSelect} defaultValue={"99"} />
          </Col>
        </Row>
        <Row>
          <Col span={12} style={{ paddingLeft: "10px" }}>
            <InputAddonField name="capmin" addonBefore="Mínimo" label="Capital Social" placeholder="R$" size="middle" />
          </Col>
          <Col span={12} style={{ marginTop: "32px", paddingLeft: "10px" }}>
            <InputAddonField name="capmax" addonBefore="Máximo" label="" placeholder="R$" size="middle" />
          </Col>
        </Row>
      
    </>
  );
};

export default FinancialLegalForm;
