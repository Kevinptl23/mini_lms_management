import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login.jsx";
import AdminDashboard from "./pages/AdminDashboard";
import CenterDashboard from "./pages/CenterDashboard";
import Courses from "./pages/Courses";
import Students from "./pages/Students";
import Centers from "./pages/Centers"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/center" element={<CenterDashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/students" element={<Students />} />
        <Route path="/centers" element={<Centers/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;