import { Route, Routes } from "react-router-dom";
import Chat from "../pages/chat";
import Home from "../pages/home";

function MainRoute() {
  return (
    <div>
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default MainRoute;
