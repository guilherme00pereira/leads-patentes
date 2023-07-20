import FormSectionTitle from "../form/FormSectionTitle.tsx";
import {Row, Col} from "antd";
import Slider from "../form/Slider.tsx";
import SelectBasic from "../form/SelectBasic.tsx";
import CheckboxField from "../form/CheckboxField.tsx";
import { matrizFilialSelect } from "../../config/data.tsx";
import DateField from "../form/DateField.tsx";

const GeneralFilterForm = () => {
    return (
        <div className="lead-section-container">
            <FormSectionTitle title="Filtro Geral" />
            <div style={{width: "100%"}}>
                <Row>
                    <Col span={8} offset={4} className="leads-cols">
                        <Slider name="nleads" label="Quantidade de Leads"/>
                    </Col>
                    <Col span={8} className="leads-cols">
                        <Row>
                            <Col span={24} offset={8} style={{flexDirection: "column"}}>
                                <CheckboxField name="exc_imp" text="Excluir empresas já importadas" />
                            </Col>
                        </Row>
                        <Row style={{marginTop: "-28px"}}>
                            <Col span={24} offset={8} style={{flexDirection: "column"}}>
                                <CheckboxField name="ativa" text="Apenas empresas ativas" />
                            </Col>
                        </Row>
                        <Row style={{marginTop: "-28px"}}>
                            <Col span={24} offset={8} style={{flexDirection: "column"}}>
                                <CheckboxField name="ativa" text="Apenas contatos higienizados" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col span={5} offset={4} className="leads-cols">
                        <SelectBasic name="mf" label="Matriz/Filial" options={matrizFilialSelect} />
                    </Col>
                    <Col span={5} offset={2}>
                        <DateField preLabel="Data início" name="data_ini" label="Data de Abertura" />
                    </Col>
                    <Col span={5} style={{marginTop: "32px"}}>
                        <DateField preLabel="Data fim" name="data_fim" label="" />
                    </Col>
                </Row>

            </div>
        </div>
    );
};

export default GeneralFilterForm;