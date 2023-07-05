import FormSectionTitle from "../form/FormSectionTitle.tsx";
import {Row, Col} from "antd";

const FinancialLegalForm = () => {
    return (
        <div className="lead-section-container">
            <FormSectionTitle title="Jurídico/Financeiro" />
            <div style={{width: "95%"}}>
                <Row>
                    <Col span={8}></Col>
                    <Col span={8}></Col>
                    <Col span={8}></Col>
                </Row>
            </div>
        </div>
    );
};

export default FinancialLegalForm;