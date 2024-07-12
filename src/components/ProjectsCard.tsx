import { useNavigate } from 'react-router-dom'
import { Button } from "antd";
import { Typography } from "antd";
import { useContext } from "react";
import { CardPageContext } from "../lib/context";


const { Title } = Typography;

interface ProjectsCardProps {
  icon: any;
  title: string;
  text: string;
  page: string;
}


const ProjectsCard = (props: ProjectsCardProps) => {
  const {setBackPage, setDomain} = useContext(CardPageContext);
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(props.title);
    setBackPage(props.page);
    setDomain(props.title);
    navigate({pathname: "/projetos"});
  }

  return (
    <div className="access-card">
      {props.icon}
      <Title level={2}>{props.title}</Title>
      <div className="access-card-content">
        <div className="card-box">
          <p>{props.text}</p>
        </div>
        <div className="access-card-footer">
          <Button type="primary" className="form-button" onClick={handleClick}>
            Entrar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
