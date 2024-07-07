import { useContext } from "react";
import { Form } from "antd";
import { FormActionContext } from "../../lib/context";
import IncludeProjectForm from "./IncludeProjectForm";
import FormSectionTitle from "../form/FormSectionTitle";

const IncludeProjectSection = () => {
  const [form] = Form.useForm();
  const { setRenderTable, setTableData, setLoading, setBlank } = useContext(FormActionContext);

  const handleSubmit = () => {
    form
      .validateFields()
      .then((param) => {
        setLoading(true);
        setBlank(false);
        setRenderTable(true);
        setTableData([]);
        console.log(param);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <div className="search-wrapper">
      <FormSectionTitle title="Incluir Projeto" />
      <Form form={form} layout="vertical" requiredMark={false} style={{ alignItems: "center", width: "360px" }}>
        <IncludeProjectForm handler={handleSubmit} />
      </Form>
    </div>
  );
};

export default IncludeProjectSection;
