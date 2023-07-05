import { useState } from "react";
import { Form } from 'antd'
import InputField from "../../form/InputField.tsx";
import SearchButton from "../../form/SearchButton.tsx";
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
          <SelectEstados handler={setSelectedUF} />
          <SelectMunicipios parentValue={selectedUF} />
          <InputField label="Bairro" placeholder="Insira o bairro da busca" />
          <InputField label="Endereço" placeholder="Insira o endereço da busca" width={260}/>
          <InputField label="CEP" placeholder="Insira o CEP da busca"/>
        <Form.Item>
          <SearchButton onClick={handleSubmit} />
        </Form.Item>
      </Form>
    );
};

export default AddressSearchForm;