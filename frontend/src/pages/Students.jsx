import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import api from "../services/api";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [centers, setCenters] = useState([]);

  const [form, setForm] = useState({});

  useEffect(() => {
    fetchStudents();
    fetchCourses();
    fetchCenters();
  }, []);

  const fetchStudents = async () => {
    const res = await api.get("/students");
    setStudents(res.data);
  };

  const fetchCourses = async () => {
    const res = await api.get("/courses");
    setCourses(res.data);
  };

  const fetchCenters = async () => {
    const res = await api.get("/centers");
    setCenters(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addStudent = async (e) => {
    e.preventDefault();

    await api.post("/students", form);

    fetchStudents();
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="container mt-4">
        <h2>Student Admission</h2>

        <form onSubmit={addStudent} className="row g-3">
          <input
            name="name"
            placeholder="Name"
            className="form-control"
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email"
            className="form-control"
            onChange={handleChange}
          />
          <input
            name="phone"
            placeholder="Phone"
            className="form-control"
            onChange={handleChange}
          />
          {/* <input
            name="course"
            placeholder="Course"
            className="form-control"
            onChange={handleChange}
          /> */}
          <select
            name="course"
            className="form-control"
            onChange={handleChange}
            required
          >
            <option value="">Select Course</option>

            {courses.map((course) => (
              <option key={course._id} value={course.courseName}>
                {course.courseName}
              </option>
            ))}
          </select>
          {/* <input
            name="centerName"
            placeholder="Center"
            className="form-control"
            onChange={handleChange}
          /> */}
          <select
            name="centerName"
            className="form-control"
            onChange={handleChange}
            required
          >
            <option value="">Select Center</option>

            {centers.map((center) => (
              <option key={center._id} value={center.centerName}>
                {center.centerName}
              </option>
            ))}
          </select>

          <button className="btn btn-primary">Add Student</button>
        </form>

        <table className="table mt-4">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Center</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s) => (
              <tr key={s._id}>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.course}</td>
                <td>{s.centerName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
