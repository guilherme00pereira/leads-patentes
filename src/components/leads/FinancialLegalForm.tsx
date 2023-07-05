import FormSectionTitle from "../form/FormSectionTitle.tsx";
import {Row, Col} from "antd";
import SelectBasic from "../form/SelectBasic.tsx";
import { naturezaJuridicaSelect, porteSelect } from "../../config/data.tsx";
import InputAddonField from "../form/InputAddonField.tsx";

const FinancialLegalForm = () => {
    return (
        <div className="lead-section-container">
            <FormSectionTitle title="Jurídico/Financeiro" />
            <div style={{width: "95%"}}>
                <Row>
                    <Col span={7}>
                        <SelectBasic label="Natureza Jurídica" width={300} options={naturezaJuridicaSelect} />
                    </Col>
                    <Col span={5}>
                        <SelectBasic label="Porte" options={porteSelect} defaultValue={"99"} />
                    </Col>
                    <Col span={5}>
                        <InputAddonField addonBefore="Mínimo" label="Capital Social" placeholder="R$" size="middle" />
                    </Col>
                    <Col span={5}>
                        <InputAddonField addonBefore="Máximo" label="" placeholder="R$" size="middle" />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default FinancialLegalForm;