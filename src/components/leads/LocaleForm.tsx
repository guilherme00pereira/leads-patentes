import FormSectionTitle from "../form/FormSectionTitle.tsx";
import { Row, Col } from "antd";
import SelectEstados from "../form/SelectEstados.tsx";
import SelectMunicipios from "../form/SelectMunicipios.tsx";
import { useState } from "react";
import InputField from "../form/InputField.tsx";

const LocaleForm = () => {
  const [selectedUF, setSelectedUF] = useState<string>("");

  return (
    <>
      <FormSectionTitle title="Localidade" />
        <Row>
          <Col span={12}>
            <SelectEstados size="middle" handler={setSelectedUF} />
          </Col>
          <Col span={12} style={{ paddingLeft: "10px" }}>
            <SelectMunicipios size="middle" parentValue={selectedUF} isRequired={false} />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <InputField
              name="bairro"
              size="middle"
              width="200px"
              label="Bairro"
              placeholder="Insira o bairro de busca"
              required={false}
            />
          </Col>
          <Col span={12} style={{ paddingLeft: "10px" }}>
            <InputField
              name="cep"
              size="middle"
              width="200px"
              label="CEP"
              placeholder="Insira o CEP de busca"
              required={false}
            />
          </Col>
        </Row>
        </>
  );
};

export default LocaleForm;
