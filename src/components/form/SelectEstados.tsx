import {useState, useEffect, Dispatch, SetStateAction} from "react";
import { Select, Form } from "antd";


const SelectField = ({handler}: {handler: Dispatch<SetStateAction<string>>}) => {
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
      name="uf"
      label="UF"
      colon={false}
      rules={[{ required: true, message: "Campo obrigatório" }]}
    >
      <Select size="large" style={{ width: "200px" }} options={options} onSelect={(value) => handler(value)} />
    </Form.Item>
  );
};

export default SelectField;
