import { useEffect } from "react";
import HeaderSection from "../components/HeaderSection";
import AddUserForm from "../components/settings.tsx/AddUserForm";
import { Divider } from "antd";
import EditUserForm from "../components/settings.tsx/EditUserForm";
import RemoveUserForm from "../components/settings.tsx/RemoveUserForm";
//import { modulesListUsers } from "../lib/apiClient";





const Settings = () => {

    useEffect(() => {
       //modulesListUsers()
    }, []);

    return (
        <div className="main-container">
            <HeaderSection title="Administrador" />
            <AddUserForm />
            <Divider className="leads-section-divider" />
            <EditUserForm />
            <Divider className="leads-section-divider" />
            <RemoveUserForm />
        </div>
    );
};

export default Settings;