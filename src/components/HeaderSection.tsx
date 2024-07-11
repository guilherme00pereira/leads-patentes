import { Typography } from 'antd'
import { titleCase } from '../lib/helpers';
import { useEffect, useState } from 'react';

const { Title } = Typography;

interface TitleProps {
    title: string;
}

const HeaderSection = ({ title }: TitleProps) => {
    const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    setUsername(user.username);
    setAvatar(user.avatar);
    }, []);
    
    return (
        <div className="header-section">
            <div>
                <Title >{title}</Title>
            </div>
            <div>
                <span>Olá, {titleCase(username)}</span>
                {avatar && <img src={avatar} alt="Avatar" />}
            </div>
        </div>
    );
};

export default HeaderSection;