import FormSectionTitle from "../form/FormSectionTitle.tsx";
import {Row, Col} from "antd";
import SelectEstados from "../form/SelectEstados.tsx";
import SelectMunicipios from "../form/SelectMunicipios.tsx";
import {useState} from "react";


const LocaleForm = () => {
    const [selectedUF, setSelectedUF] = useState<string>("");

    return (
        <div className="lead-section-container">
            <FormSectionTitle title="Localidade" />
            <div style={{width: "95%"}}>
                <Row>
                    <Col span={6}>
                        <SelectEstados  handler={setSelectedUF} />
                    </Col>
                    <Col span={6}>
                        <SelectMunicipios parentValue={selectedUF} />
                    </Col>
                    <Col span={6}></Col>
                    <Col span={6}></Col>
                </Row>
            </div>
        </div>
    );
};

export default LocaleForm;