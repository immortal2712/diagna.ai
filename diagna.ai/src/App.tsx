import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Schedules from "./pages/Schedules";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import { useEffect, useState } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 650);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="flex justify-center items-center h-screen bg-red-50">
        <p className="menu-heading text-black text-base font-[Montserrat] font-bold leading-[1.81rem] sm:ml-3 md:ml-1 lg:ml-[3.75rem] sm:block">
          Please open this app on Ipad or Laptops
        </p>
      </div>
    );
  }
  return (
    <div className="m-0 p-0 box-border">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/schedules" element={<Schedules />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
