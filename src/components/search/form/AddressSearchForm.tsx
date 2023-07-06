import { useState } from "react";
import { Form } from 'antd'
import InputField from "../../form/InputField.tsx";
import SubmitButton from "../../form/SubmitButton.tsx";
import SelectEstados from "../../form/SelectEstados.tsx";
import SelectMunicipios from "../../form/SelectMunicipios.tsx";

const AddressSearchForm = () => {
    const [selectedUF, setSelectedUF] = useState<string>("");
    const [form] = Form.useForm()

    const handleSubmit = () => {
        console.log(selectedUF)
    }

    return (
      <Form
        form={form}
        layout="inline"
        requiredMark="optional"
        style={{ alignItems: 'center', justifyContent: 'center' }}
      >
          <SelectEstados size="large" handler={setSelectedUF} />
          <SelectMunicipios size="large" parentValue={selectedUF} />
          <InputField size="large" label="Bairro" placeholder="Insira o bairro da busca" />
          <InputField size="large" label="Endereço" placeholder="Insira o endereço da busca" width={260}/>
          <InputField size="large" label="CEP" placeholder="Insira o CEP da busca"/>
        <Form.Item>
          <SubmitButton onClick={handleSubmit} />
        </Form.Item>
      </Form>
    );
};

export default AddressSearchForm;