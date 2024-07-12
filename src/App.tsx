import { Layout as Container } from "antd";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/Layout.tsx";
import IndividualSearch from "./routes/IndividualSearch.tsx";
import LeadGeneration from "./routes/LeadGeneration.tsx";
import ImportHistory from "./routes/ImportHistory.tsx";
import Auth from "./routes/Auth.tsx";
import AdminAuth from "./routes/AdminAuth.tsx";
import "antd/dist/reset.css";
import Settings from "./routes/Settings.tsx";
import Analytics from "./routes/Analytics.tsx";
import Strategy from "./routes/Strategy.tsx";
import Integration from "./routes/Integration.tsx";
import ProjectsPage from "./routes/ProjectsPage.tsx";
import NotFound from "./routes/NotFound.tsx";
import { StyledAuth } from "./StyledAuth.tsx";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/admin",
    element: <AdminAuth />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "strategy",
        element: <Strategy />,
      },
      {
        path: "integration",
        element: <Integration />,
      },
      {
        path: "",
        element: <IndividualSearch />,
      },
      {
        path: "geracao-leads",
        element: <LeadGeneration />,
      },
      {
        path: "historico-de-importacoes",
        element: <ImportHistory />,
      },
      {
        path: "administrativo",
        element: <Settings />,
      },
      {
        path: "projetos",
        element: <ProjectsPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      }
    ],
  },
]);

export default function App() {
  return (
    <Container style={{ minHeight: "100vh" }}>
        <StyledAuth>
          <RouterProvider router={router} fallbackElement={<Fallback />} />
        </StyledAuth>
    </Container>
  );
}

export function Fallback() {
  return <p>Performing initial data load</p>;
}
