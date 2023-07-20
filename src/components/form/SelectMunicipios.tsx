import { useState, useEffect } from "react";
import { Select, Form } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";

interface SelectProps {
  size: SizeType;
  parentValue: string;
  isRequired: boolean;
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
        const selectState = Object.fromEntries(
          Object.entries(estados).filter(
            ([estado]) => estado === props.parentValue
          )
        );
        //if (typeof selectState[0] !== 'undefined') {
          const municipios = Object.values(selectState)[0].sort(
            (a: any, b: any) => a.nome.localeCompare(b.nome)
          );
          setOptions(
            municipios.map((municipio: any) => {
              return {
                value: municipio.cod,
                label: municipio.nome,
              };
            })
          );
        //}
      });
  }, [props.parentValue]);

  return (
    <Form.Item
      name="municipio"
      label="Município"
      colon={false}
      rules={[{ required: props.isRequired, message: "Campo obrigatório" }]}
    >
      <Select
        showSearch
        optionFilterProp="children"
        size={props.size}
        style={{ width: "200px" }}
        options={options}
        placeholder="Município"
        filterOption={(input, option) =>
          (option.label ?? "").toUpperCase().includes(input.toUpperCase())
        }
      />
    </Form.Item>
  );
};

export default SelectField;
