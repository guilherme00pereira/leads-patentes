import { useState, useEffect } from "react";
import { Select, Form } from "antd";

interface SelectProps {
  label: string;
  onSelect: (value: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectField = (props: SelectProps) => {
  const [options, setOptions] = useState<any[]>([]);

  useEffect(() => {
        let estados: any[];
        fetch("/uf.json")
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            estados = data;
          })
          .then(() => {
            setOptions(
              Object.keys(estados).map((estado: any) => {
                return {
                  value: estado,
                  label: estado,
                };
              })
            );
          });
  }, []);

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
