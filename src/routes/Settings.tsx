import { useEffect } from "react";
import HeaderSection from "../components/HeaderSection";
import { useAuth } from "../hooks/useAuth";


const Settings = () => {
    const auth = useAuth();

    useEffect(() => {
        auth.listUsers().then((result) => {
            console.log(result);
        });
    }, []);

    return (
        <div className="main-container">
            <HeaderSection title="Configurações" />
        </div>
    );
};

export default Settings;