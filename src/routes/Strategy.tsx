import AcessCard from "../components/AcessCard";
import HeaderSection from "../components/HeaderSection";

const Strategy = () => {
  return (
    <div className="main-container">
      <HeaderSection title="Strategy" />
      <div className="access-card-list">
          <AcessCard
            title="ICP Map"
            text="Conheça em detalhes o perfil de seu cliente ideal"
            icon={undefined}
            buttonAction={""}
          />
          <AcessCard title="Funnel Map" text="Avalie a performance e pontos de melhoria em seu funil de vendas" icon={undefined} buttonAction={""} />
      </div>
    </div>
  );
};

export default Strategy;
