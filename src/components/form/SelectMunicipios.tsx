import { useState, useEffect } from "react";
import { Select, Form } from "antd";


const SelectField = ({parentValue}: {parentValue: string}) => {
  const [options, setOptions] = useState<any[]>([]);

  useEffect(() => {
    console.log(parentValue);
    let municipios: any[];
    fetch("/uf.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        municipios = data;
      })
      .then(() => {
        setOptions(
          Object.keys(municipios)
            .filter((estado) => estado === parentValue)
            .map((municipio: any) => {
              return {
                value: municipio.cod,
                label: municipio.nome,
              };
            })
        );
      });
  }, [parentValue]);

  return (
    <Form.Item
      name="municipio"
      label="Município"
      colon={false}
      rules={[{ required: true, message: "Campo obrigatório" }]}
    >
      <Select size="large" style={{ width: "200px" }} options={options} />
    </Form.Item>
  );
};

export default SelectField;
