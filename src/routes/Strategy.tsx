import ProjectsCard from "../components/ProjectsCard";
import HeaderSection from "../components/HeaderSection";
import Icon from "@ant-design/icons/lib/components/Icon";
import Map from "../assets/svg/map.svg?react";
import Funnel from "../assets/svg/filter_alt.svg?react";

const Strategy = () => {
  return (
    <div className="main-container">
      <HeaderSection title="Strategy" />
      <div className="access-card-list">
        <ProjectsCard
          title="ICP Map"
          text="Conheça em detalhes o perfil de seu cliente ideal"
          icon={
            <Icon component={Map} style={{ fontSize: "42px", color: "#141774" }} className="access-card-icon" />
          }
          page="strategy"
        />
        <ProjectsCard
          title="Funnel Map"
          text="Avalie a performance e pontos de melhoria em seu funil de vendas"
          icon={
            <Icon component={Funnel} style={{ fontSize: "48px", color: "#141774" }} className="access-card-icon" />
          }
          page="strategy"
        />
      </div>
    </div>
  );
};

export default Strategy;
