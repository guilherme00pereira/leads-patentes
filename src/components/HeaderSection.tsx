import { Typography } from 'antd'
import { useAuth } from '../hooks/useAuth';
import { titleCase } from '../lib/helpers';

const { Title } = Typography;

interface TitleProps {
    title: string;
}

const HeaderSection = ({ title }: TitleProps) => {
    const auth = useAuth();
    
    return (
        <div className="header-section">
            <div>
                <Title >{title}</Title>
            </div>
            <div>
                <span>Olá, {titleCase(auth.username)}</span>
                {auth.avatar && <img src={auth.avatar} alt="Avatar" />}
            </div>
        </div>
    );
};

export default HeaderSection;