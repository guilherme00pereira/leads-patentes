import { useState, useEffect } from "react";
import { Select, Form } from "antd";
import { SelectType } from "../../config/types.ts";

interface SelectProps {
  label: string;
  type: SelectType;
}

const SelectField = (props: SelectProps) => {
  const [options, setOptions] = useState<any[]>([]);

  useEffect(() => {

    switch (props.type) {
      case SelectType.UF:
        let estados: any[];
        fetch("/uf.json").then((response) => {
          return response.json();
        }).then((data) => {
          estados = data;
        }).then(() => {
          setOptions(Object.keys(estados).map((estado: any) => {
            return {
              value: estado,
              label: estado,
            };
        }));
      });
      case SelectType.MUNICIPIO:
        setOptions([]);
    }

  }, []);

  const handleSelectChange = (value: any) => {
    console.log(`selected ${value}`); 
  }

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
