import { Bell, ChevronDown, Search } from "lucide-react";

function Navbar() {
  return (
    <header
      className="topbar"
      style={{
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(5, 15, 30, 0.94),
            rgba(8, 25, 45, 0.78)
          ),
          url("/src/assets/img/nathan-forbes-58uZ3FW7FB4-unsplash.jpg");
        `,
        backgroundSize: "cover",
        backgroundPosition: "center 45%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="topbar-left">
        <div className="topbar-search">
          <Search size={16} />
          <input
            type="text"
            placeholder="Pesquisar módulo, operação ou alerta"
          />
        </div>
      </div>

      <div className="topbar-right">
        <span className="status-dot" aria-label="Sistema online" />
        <span>Operacional</span>

        <button
          type="button"
          className="notification-button"
          aria-label="Notificações"
        >
          <Bell size={17} />
        </button>

        <div className="top-user">
          <div className="top-avatar">AD</div>

          <div>
            <strong>Admin</strong>
            <small>Supervisor</small>
          </div>
        </div>

        <ChevronDown size={15} />
      </div>
    </header>
  );
}

export default Navbar;
