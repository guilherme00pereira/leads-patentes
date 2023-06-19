import HeaderSection from "../components/HeaderSection.tsx";
import GeneralFilterForm from "../components/leads/GeneralFilterForm.tsx";


const LeadGeneration = () => {
    return (
      <div className="main-container">
          <HeaderSection title="Geração de Leads"/>
            <GeneralFilterForm />
        </div>
    );
};

export default LeadGeneration;