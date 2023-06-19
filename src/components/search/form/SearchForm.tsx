import { Form } from 'antd'
import SearchButton from "../../form/SearchButton.tsx";
import InputField from "../../form/InputField.tsx";

const SearchForm = () => {
    const [form] = Form.useForm()

    return (
        <Form
          form={form}
          layout="inline"
          requiredMark="optional"
          style={{ alignItems: 'flex-start' }}
        >
            <InputField />
            <Form.Item>
                <SearchButton />
            </Form.Item>
        </Form>
    );
};

export default SearchForm;