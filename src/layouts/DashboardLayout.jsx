import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

function DashboardLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const session = JSON.parse(localStorage.getItem("authSession") || "null");

      if (!session || !session.isAuthenticated) {
        navigate("/login", { replace: true });
      }
    } catch {
      localStorage.removeItem("authSession");
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
