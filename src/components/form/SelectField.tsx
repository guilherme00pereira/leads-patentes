import { Select, Form } from 'antd';
import {SelectType} from "../../config/types.ts";
import {estados} from "../../config/data.tsx";

interface SelectProps {
  label: string;
  type: SelectType;
}

const SelectField = (props: SelectProps) => {

  const dataSource = () => {
    switch (props.type) {
      case SelectType.UF:
        return estados.map((estado) => {
          return {
            value: estado.sigla,
            label: estado.nome
          }
        }
      )
      case SelectType.MUNICIPIO:
        return []
    }
  }

  return (
    <Form.Item
      name={props.label.toLowerCase()}
      label={props.label}
      colon={false}
      rules={[{ required: true, message: 'Campo obrigatório' }]}
    >
      <Select
        size='large'
        style={{ width: '200px' }}
        options={dataSource()}
      />
    </Form.Item>
  );
};

export default SelectField;