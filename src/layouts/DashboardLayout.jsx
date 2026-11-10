import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

function DashboardLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

    if (!isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="main-area">
        <Navbar />

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
