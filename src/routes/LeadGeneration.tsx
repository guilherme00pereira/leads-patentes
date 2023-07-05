import HeaderSection from "../components/HeaderSection.tsx";
import GeneralFilterForm from "../components/leads/GeneralFilterForm.tsx";
import LocaleForm from "../components/leads/LocaleForm.tsx";
import FinanceLegalForm from "../components/leads/FinancialLegalForm.tsx";


const LeadGeneration = () => {
    return (
      <div className="main-container">
          <HeaderSection title="Geração de Leads"/>
            <GeneralFilterForm />
            <LocaleForm />
            <FinanceLegalForm />
        </div>
    );
};

export default LeadGeneration;