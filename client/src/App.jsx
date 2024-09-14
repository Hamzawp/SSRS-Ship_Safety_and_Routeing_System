import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import History from "./pages/History/History";
import Ship from "./pages/Ship/Ship";
import Chat from "./pages/Chat/Chat";
import Commands from "./pages/Commands/Commands";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
        <Route path="/ship" element={<Ship />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/commands" element={<Commands />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
