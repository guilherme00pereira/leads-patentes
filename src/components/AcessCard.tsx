import { Button } from "antd";
import { Typography } from "antd";

const { Title } = Typography;

interface AcessCardProps {
  icon: any;
  title: string;
  text: string;
  buttonAction: string;
}

const AcessCard = (props: AcessCardProps) => {
  return (
    <div className="access-card">
      {props.icon}
      <Title level={2}>{props.title}</Title>
      <div className="access-card-content">
        <div className="card-box">
          <p>{props.text}</p>
        </div>
        <div className="access-card-footer">
          <Button type="primary" className="form-button">
            Entrar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AcessCard;
