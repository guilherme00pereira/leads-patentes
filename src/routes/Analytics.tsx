import ProjectsCard from "../components/ProjectsCard";
import HeaderSection from "../components/HeaderSection";
import Icon from "@ant-design/icons/lib/components/Icon";
import RightClick from "../assets/svg/right_click.svg?react";
import Work from "../assets/svg/work.svg?react";

const Analytics = () => {
  return (
    <div className="main-container">
      <HeaderSection title="Analytics" />
      <div className="access-card-list">
        <ProjectsCard
          title="Marketing"
          text="Tudo sobre sua operação de vendas - Receita Mensal, Venda Por Produto, Região, etc."
          icon={
            <Icon component={RightClick} style={{ fontSize: "48px", color: "#141774" }} className="access-card-icon" />
          }
          page="analytics"
        />
        <ProjectsCard
          title="Vendas"
          text="Todas as métricas de marketing da sua empresa"
          icon={<Icon component={Work} style={{ fontSize: "36px", color: "#141774" }} className="access-card-icon" />}
          page="analytics"
        />
      </div>
    </div>
  );
};

export default Analytics;
