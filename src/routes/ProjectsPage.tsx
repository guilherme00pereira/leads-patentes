import { useContext } from "react";
import HeaderSection from "../components/HeaderSection";
import { CardPageContext, FormActionContext } from "../lib/context";
import Loading from "../components/Loading";
import ProjectsResultTable from "../components/projects/ProjectsResultTable";
import IncludeProjectSection from "../components/projects/IncludeProjectSection";
import { Divider } from "antd";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const { domain, backPage } = useContext(CardPageContext);
  const {loading} = useContext(FormActionContext)

  const renderSection = () => {
    // if (blank) {
    //   return <div></div>
    // } else {
    //   return renderTable ? <ProjectsResultTable/> : "";
    // }
    return <ProjectsResultTable />
  }

  return (
    <div className="main-container">
      <HeaderSection title={`Analytics | ${domain}`} />
      <div className="project-back-link-wrapper">
        <Link to={`/${backPage}`} className="project-back-link">voltar</Link>
      </div>
      <IncludeProjectSection />
      <Divider className="leads-section-divider" />
      {loading ? <Loading /> : renderSection()}
    </div>
  );
};

export default ProjectsPage;
