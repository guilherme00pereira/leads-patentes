import FormSectionTitle from "../form/FormSectionTitle.tsx";
import {Row, Col} from "antd";
import Slider from "../form/Slider.tsx";
import SelectBasic from "../form/SelectBasic.tsx";
import Checkbox from "../form/Checkbox.tsx";
import { matrizFilialSelect } from "../../config/data.tsx";
import DateField from "../form/DateField.tsx";

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
                        <SelectBasic label="Matriz/Filial" options={matrizFilialSelect} />
                    </Col>
                    <Col span={4}>
                        <DateField />
                    </Col>
                    <Col span={4}>
                        <DateField />
                    </Col>
                </Row>
                <Row style={{marginTop: "-42px"}}>
                    <Col span={8} offset={8} style={{flexDirection: "column"}}>
                        <Checkbox name="exc_imp" text="Excluir empresas já importadas" />
                    </Col>
                </Row>
                <Row>
                    <Col span={8} offset={8} style={{flexDirection: "column"}}>
                        <Checkbox name="ativa" text="Apenas empresas ativas" />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default GeneralFilterForm;