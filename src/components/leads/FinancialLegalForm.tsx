import FormSectionTitle from "../form/FormSectionTitle.tsx";
import {Row, Col} from "antd";
import SelectBasic from "../form/SelectBasic.tsx";
import { naturezaJuridicaSelect, porteSelect } from "../../config/data.tsx";
import InputAddonField from "../form/InputAddonField.tsx";

const FinancialLegalForm = () => {
    return (
        <div className="lead-section-container">
            <FormSectionTitle title="Jurídico/Financeiro" />
            <div style={{width: "100%"}}>
                <Row>
                    <Col span={8} className="leads-cols">
                        <SelectBasic label="Natureza Jurídica" width={300} options={naturezaJuridicaSelect} />
                    </Col>
                    <Col span={6} className="leads-cols">
                        <SelectBasic label="Porte" options={porteSelect} defaultValue={"99"} />
                    </Col>
                    <Col span={5} style={{paddingLeft: "10px"}}>
                        <InputAddonField addonBefore="Mínimo" label="Capital Social" placeholder="R$" size="middle" />
                    </Col>
                    <Col span={5} style={{marginTop: "32px", paddingLeft: "10px"}}>
                        <InputAddonField addonBefore="Máximo" label="" placeholder="R$" size="middle" />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default FinancialLegalForm;