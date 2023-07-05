import FormSectionTitle from "../form/FormSectionTitle.tsx";
import {Row, Col} from "antd";
import SelectEstados from "../form/SelectEstados.tsx";
import SelectMunicipios from "../form/SelectMunicipios.tsx";
import {useState} from "react";
import InputField from "../form/InputField.tsx";


const LocaleForm = () => {
    const [selectedUF, setSelectedUF] = useState<string>("");

    return (
        <div className="lead-section-container">
            <FormSectionTitle title="Localidade" />
            <div style={{width: "95%"}}>
                <Row>
                    <Col span={6}>
                        <SelectEstados size="middle" handler={setSelectedUF} />
                    </Col>
                    <Col span={6}>
                        <SelectMunicipios size="middle" parentValue={selectedUF} />
                    </Col>
                    <Col span={6}>
                        <InputField size="middle" label="Bairro" placeholder="Insira o bairro de busca" />
                    </Col>
                    <Col span={6}>
                        <InputField size="middle" label="CEP" placeholder="Insira o CEP de busca" />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default LocaleForm;