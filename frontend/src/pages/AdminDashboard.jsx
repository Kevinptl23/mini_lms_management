import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import api from "../services/api";

export default function AdminDashboard() {
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const totalCenters = [...new Set(students.map(s => s.centerName))].length;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const c = await api.get("/courses");
    const s = await api.get("/students");

    setCourses(c.data);
    setStudents(s.data);
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="container mt-4">
        <h2>Admin Dashboard</h2>

        <div className="row mt-4">
          <StatCard title="Total Courses" value={courses.length} />
          <StatCard title="Total Students" value={students.length} />
          <StatCard title="Total Centers" value={totalCenters} />
        </div>
      </div>
    </div>
  );
}
