import { Row, Col } from "antd";
import SubmitButton from "../form/SubmitButton.tsx";
import InputField from "../form/InputField.tsx";

const IncludeProjectForm = ({ handler }: { handler: () => void }) => {
  return (
    <div className="include-projects-form">
      <Row>
        <Col>
          <InputField name="termo" size="large" label="Nome:" placeholder="" required={true} />
        </Col>
      </Row>
      <Row style={{width: "100%"}}>
        <Col className="include-projects-form-button">
          <InputField name="termo" size="large" label="Fazer Upload:" placeholder="" required={true} />
            <SubmitButton text="Incluir" onClick={handler} />
        </Col>
      </Row>
    </div>
  );
};

export default IncludeProjectForm;
