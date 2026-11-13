import { NavLink, useNavigate } from "react-router-dom";
import {
  Gauge,
  Wrench,
  ShieldCheck,
  AlertTriangle,
  Search,
  Workflow,
  ClipboardCheck,
  BarChart3,
  Users,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: Gauge },
  { to: "/equipamentos", label: "Equipamentos", icon: ClipboardCheck },
  { to: "/manutencao", label: "Manutenção", icon: Wrench },
  { to: "/cybersecurity", label: "Cibersegurança", icon: ShieldCheck },
  { to: "/incidentes", label: "Incidentes", icon: AlertTriangle },
  { to: "/osint", label: "OSINT", icon: Search },
  { to: "/workflows", label: "Workflows", icon: Workflow },
  { to: "/execucoes", label: "Execuções", icon: ClipboardCheck },
  { to: "/relatorios", label: "Relatórios", icon: BarChart3 },
  { to: "/utilizadores", label: "Utilizadores", icon: Users },
  { to: "/auditoria", label: "Auditoria", icon: FileText },
  { to: "/definicoes", label: "Definições", icon: Settings },
];

function Sidebar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("authSession");
    navigate("/login", { replace: true });
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-mark">AO</div>
        <div>
          <strong>ANGOLA OIL</strong>
          <small>OPERATIONS</small>
        </div>
      </div>

      <div className="menu-caption">NAVEGAÇÃO</div>

      <nav className="side-nav" aria-label="Sidebar">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}>
            <span className="nav-icon"><Icon size={16} /></span>
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="user-mini">
          <div className="user-avatar">AD</div>
          <div>
            <strong>Administrador</strong>
            <small>Operações</small>
          </div>
        </div>

        <button type="button" className="logout-button" onClick={handleLogout}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
            <LogOut size={13} />
            Sair
          </span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
