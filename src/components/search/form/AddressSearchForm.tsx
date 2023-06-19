import { Input, Form } from 'antd'

const AddressSearchForm = () => {
    const [form] = Form.useForm()

    return (
      <Form form={form}>
          <Input
            placeholder=""
            style={{ width: '100%' }}
          />
      </Form>
    );
};

export default AddressSearchForm;