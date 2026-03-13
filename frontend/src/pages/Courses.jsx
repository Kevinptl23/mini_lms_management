import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import api from "../services/api";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  const [courseName, setCourseName] = useState("");
  const [duration, setDuration] = useState("");
  const [fee, setFee] = useState("");

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const res = await api.get("/courses");
    setCourses(res.data);
  };

  const addCourse = async (e) => {
    e.preventDefault();

    await api.post("/courses", { courseName, duration, fee });

    fetchCourses();
  };

  const deleteCourse = async (id) => {
    await api.delete(`/courses/${id}`);
    fetchCourses();
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="container mt-4">
        <h2>Courses</h2>

        <form onSubmit={addCourse} className="row g-3 mt-3">
          <input
            className="form-control"
            placeholder="Course Name"
            onChange={(e) => setCourseName(e.target.value)}
          />

          <input
            className="form-control"
            placeholder="Duration"
            onChange={(e) => setDuration(e.target.value)}
          />

          <input
            className="form-control"
            placeholder="Fee"
            onChange={(e) => setFee(e.target.value)}
          />

          <button className="btn btn-success">Add Course</button>
        </form>

        <table className="table mt-4">
          <thead>
            <tr>
              <th>Name</th>
              <th>Duration</th>
              <th>Fee</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {courses.map((c) => (
              <tr key={c._id}>
                <td>{c.courseName}</td>
                <td>{c.duration}</td>
                <td>{c.fee}</td>

                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteCourse(c._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
