import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import History from "./pages/History/History";
import Ship from "./pages/Ship/Ship";
import Chat from "./pages/Chat/Chat";
import Commands from "./pages/Commands/Commands";
import MapEarth from "./pages/MapEarth/MapEarth";
import MaritimeNews from './pages/MaritimeNews/MaritimeNews'
import Radar from "./pages/Radar/Radar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/curr-map" element={<Dashboard />} />
        <Route path="/" element={<MapEarth />} />
        <Route path="/maritime-news" element={<MaritimeNews />} />
        <Route path="/history" element={<History />} />
        <Route path="/ship" element={<Ship />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/commands" element={<Commands />} />
        <Route path="/radar" element={<Radar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
