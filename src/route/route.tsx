import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Home from "../pages/home";

function MainRoute() {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default MainRoute;
