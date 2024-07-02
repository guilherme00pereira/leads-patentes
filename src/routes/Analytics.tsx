import AcessCard from '../components/AcessCard';
import HeaderSection from '../components/HeaderSection';

const Analytics = () => {
    return (
        <div className="main-container">
            <HeaderSection title="Analytics"/>
            <div className="card-list">
                <AcessCard title="Marketing" text="Tudo sobre sua operação de vendas - Receita Mensal, Venda Por Produto, Região, etc." icon={undefined} buttonAction={''}/>
            </div>
        </div>
    );
};

export default Analytics;