import { Route, Routes } from "react-router-dom";
import Chat from "../pages/chat";

function MainRoute() {
  return (
    <div>
      <Routes>
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default MainRoute;
