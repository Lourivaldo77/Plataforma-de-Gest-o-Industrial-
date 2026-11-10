import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Equipamentos from "./pages/Equipamentos/Equipamentos";
import Manutencao from "./pages/Manutencao/Manutencao";
import Ciberseguranca from "./pages/Ciberseguranca/Ciberseguranca";
import Incidentes from "./pages/Incidentes/Incidentes";
import OSINT from "./pages/OSINT/OSINT";
import Workflows from "./pages/Workflows/Workflows";
import EditorWorkflow from "./pages/Workflows/EditorWorkflow";
import Execucoes from "./pages/Execucoes/Execucoes";
import Relatorios from "./pages/Relatorios/Relatorios";
import Utilizadores from "./pages/Utilizadores/Utilizadores";
import Auditoria from "./pages/Auditoria/Auditoria";
import Definicoes from "./pages/Definicoes/Definicoes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/equipamentos" element={<Equipamentos />} />
          <Route path="/manutencao" element={<Manutencao />} />
          <Route path="/cybersecurity" element={<Ciberseguranca />} />
          <Route path="/incidentes" element={<Incidentes />} />
          <Route path="/osint" element={<OSINT />} />
          <Route path="/workflows" element={<Workflows />} />
          <Route path="/workflows/editor" element={<EditorWorkflow />} />
          <Route path="/execucoes" element={<Execucoes />} />
          <Route path="/relatorios" element={<Relatorios />} />
          <Route path="/utilizadores" element={<Utilizadores />} />
          <Route path="/auditoria" element={<Auditoria />} />
          <Route path="/definicoes" element={<Definicoes />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
