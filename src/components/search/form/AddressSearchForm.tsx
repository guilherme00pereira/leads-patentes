import { useState } from "react";
import { Form } from 'antd'
import SelectField from "../../form/SelectField.tsx";
import {SelectType} from "../../../config/types.ts";
import InputField from "../../form/InputField.tsx";
import SearchButton from "../../form/SearchButton.tsx";

const AddressSearchForm = () => {
    const [selectedUF, setSelectedUF] = useState<string>("");
    const [form] = Form.useForm()

    return (
      <Form
        form={form}
        layout="inline"
        requiredMark="optional"
        style={{ alignItems: 'center', justifyContent: 'center' }}
      >
          <SelectField label="UF" type={SelectType.UF} />
          <SelectField label="Município" type={SelectType.MUNICIPIO} />
          <InputField label="Bairro" placeholder="Insira o bairro da busca" />
          <InputField label="Endereço" placeholder="Insira o endereço da busca" width={260}/>
          <InputField label="CEP" placeholder="Insira o CEP da busca"/>
        <Form.Item>
          <SearchButton />
        </Form.Item>
      </Form>
    );
};

export default AddressSearchForm;