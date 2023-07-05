import FormSectionTitle from "../form/FormSectionTitle.tsx";
import {Row, Col, Checkbox} from "antd";
import Slider from "../form/Slider.tsx";
import SelectBasic from "../form/SelectBasic.tsx";

const GeneralFilterForm = () => {
    return (
        <div className="lead-section-container">
            <FormSectionTitle title="Filtro Geral" />
            <div style={{width: "95%"}}>
                <Row>
                    <Col span={8}>
                        <Slider label="Quantidade de Leads"/>
                    </Col>
                    <Col span={6}>
                        <SelectBasic label="Matriz/Filial" options={[]} />
                    </Col>
                    <Col span={10}>col-8</Col>
                </Row>
                <Row>
                    <Col span={8} offset={8} style={{flexDirection: "column"}}>
                        <Checkbox style={{paddingTop: "10px"}}>Excluir empresas já importadas</Checkbox>
                    </Col>
                </Row>
                <Row>
                    <Col span={8} offset={8} style={{flexDirection: "column"}}>
                        <Checkbox style={{paddingTop: "10px"}}>Apenas empresas ativas</Checkbox>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default GeneralFilterForm;