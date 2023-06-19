import { Form } from 'antd'
import SearchButton from "../../form/SearchButton.tsx";
import InputField from "../../form/InputField.tsx";

interface FormProps {
    label: string;
    placeholder?: string;
  }

const SearchForm = (props: FormProps) => {
    const [form] = Form.useForm()

    return (
        <Form
          form={form}
          layout="inline"
          requiredMark="optional"
          style={{ alignItems: 'flex-start' }}
        >
            <InputField label={props.label} placeholder={props.placeholder} />
            <Form.Item>
                <SearchButton />
            </Form.Item>
        </Form>
    );
};

export default SearchForm;