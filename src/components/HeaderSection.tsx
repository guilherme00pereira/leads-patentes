import { Typography } from 'antd'
import { titleCase } from '../lib/helpers';
import { useEffect, useState } from 'react';
import { currentAuthenticatedUser } from '../lib/amplifyClient';

const { Title } = Typography;

interface TitleProps {
    title: string;
}

const HeaderSection = ({ title }: TitleProps) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
    const user = await currentAuthenticatedUser();
    if (user) {
    setUsername(user.username);
    }
    }
    fetchUser();
    }, []);
    
    return (
        <div className="header-section">
            <div>
                <Title >{title}</Title>
            </div>
            <div>
                <span>Olá, {titleCase(username)}</span>
            </div>
        </div>
    );
};

export default HeaderSection;