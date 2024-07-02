import React from "react";
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
      <Title level={2}>{props.title}</Title>
      <div className="access-card-content">
        <div className="card-box">
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default AcessCard;
