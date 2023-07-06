import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./routes/Layout.tsx";
import IndividualSearch from "./routes/IndividualSearch.tsx";
import LeadGeneration from "./routes/LeadGeneration.tsx";
import ImportHistory from "./routes/ImportHistory.tsx";
import Auth from "./routes/Auth.tsx";
import 'antd/dist/reset.css';
import Settings from "./routes/Settings.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/painel",
    element: <Layout />,
    children: [
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
        path: "configuracoes",
        element: <Settings />,
      }
      ]
  }
])

export default function App() {
  return (
    <RouterProvider router={router} fallbackElement={<Fallback />} />
  )
}

export function Fallback() {
  return <p>Performing initial data load</p>;
}
