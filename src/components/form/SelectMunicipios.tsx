import { useState, useEffect } from "react";
import { Select, Form } from "antd";

interface SelectProps {
  label: string;
  parentValue: string;
}

const SelectField = (props: SelectProps) => {
  const [options, setOptions] = useState<any[]>([]);

  useEffect(() => {
    console.log(props.parentValue);
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
            .filter((estado) => estado === props.parentValue)
            .map((municipio: any) => {
              return {
                value: municipio.cod,
                label: municipio.nome,
              };
            })
        );
      });
  }, [props.parentValue]);

  return (
    <Form.Item
      name={props.label.toLowerCase()}
      label={props.label}
      colon={false}
      rules={[{ required: true, message: "Campo obrigatório" }]}
    >
      <Select size="large" style={{ width: "200px" }} options={options} />
    </Form.Item>
  );
};

export default SelectField;
