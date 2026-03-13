import { useEffect, useState } from "react";
import api from "../services/api";

export default function CenterDashboard() {
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);

  // Get center name from login
  const centerName = localStorage.getItem("centerName");

  // Filter students for this center
  const centerStudents = students.filter(
    (student) => student.centerName === centerName,
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const courseRes = await api.get("/courses");
      const studentRes = await api.get("/students");

      setCourses(courseRes.data);
      setStudents(studentRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-2 text-center">Center Dashboard</h2>

      <h5 className="text-center text-muted mb-4">Center: {centerName}</h5>

      {/* Stats Cards */}

      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card shadow text-center p-3 border-0 bg-primary text-white">
            <h5>Total Students</h5>
            <h2>{centerStudents.length}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow text-center p-3 border-0 bg-success text-white">
            <h5>Available Courses</h5>
            <h2>{courses.length}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow text-center p-3 border-0 bg-warning text-white">
            <h5>Active Admissions</h5>
            <h2>{centerStudents.length}</h2>
          </div>
        </div>
      </div>

      {/* Courses Section */}

      <h4 className="mb-3">Available Courses</h4>

      <div className="row">
        {courses.map((course) => (
          <div className="col-md-4 mb-3" key={course._id}>
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title">{course.courseName}</h5>

                <p className="text-muted">Duration: {course.duration}</p>

                <p className="fw-bold text-primary">Fee: ₹{course.fee}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Students Section */}

      <h4 className="mt-4">Center Students</h4>

      <div className="card shadow border-0 mt-3">
        <div className="card-body">
          <table className="table table-hover">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Course</th>
                <th>Center</th>
                <th>Admission Date</th>
              </tr>
            </thead>

            <tbody>
              {centerStudents.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center">
                    No students enrolled yet
                  </td>
                </tr>
              ) : (
                centerStudents.map((student) => (
                  <tr key={student._id}>
                    <td>{student.name}</td>

                    <td>{student.email}</td>

                    <td>{student.course}</td>

                    <td>{student.centerName}</td>

                    <td>
                      {student.admissionDate
                        ? new Date().toLocaleDateString()
                        : "N/A"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
