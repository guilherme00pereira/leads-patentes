import { Form } from "antd";
import SubmitButton from "../../form/SubmitButton.tsx";
import InputField from "../../form/InputField.tsx";
import {
  IndividualSearchType,
} from "../../../lib/types.ts";

interface FormProps {
  label: string;
  placeholder?: string;
  menu: IndividualSearchType;
  handler: () => void;
}

const SearchForm = (props: FormProps) => {

  return (
    <>
      <InputField name="termo" size="large" label={props.label} placeholder={props.placeholder} required={true} />
      <Form.Item>
        <SubmitButton text="Buscar" isSearch onClick={props.handler} />
      </Form.Item>
    </>
  );
};

export default SearchForm;
