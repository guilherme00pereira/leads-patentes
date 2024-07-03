import {Row, Col} from "antd";
import FormSectionTitle from '../form/FormSectionTitle';
import InputField from "../form/InputField";
import SubmitButton from "../form/SubmitButton.tsx";

const RemoveUserForm = () => {

    const handleSubmit = () => {
        console.log("Submit");
    }

    return (
        <div className="settings-section-container">
            <FormSectionTitle title="Excluir Usuário" />
            <div style={{width: "100%"}}>
                <Row>
                    <Col span={8} className="">
                        <InputField name="name" size="large" width="200px" label="Nome" placeholder="Insira o nome do usuário" required={true} />
                        <SubmitButton text="Buscar" isSearch onClick={handleSubmit} />
                    </Col>
                    <Col span={8} className="">
                        <SubmitButton text="Excluir" onClick={handleSubmit} />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default RemoveUserForm;