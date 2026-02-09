import Sidebar from "../components/Sidebar/Sidebar";
import Dashboard from "../components/Dashboard";
import ViolationRecords from "../components/ViolationRecords";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapView from "../components/MapView";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-page">
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/violation-records" element={<ViolationRecords />} />
            <Route path="/map-view" element={<MapView />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
