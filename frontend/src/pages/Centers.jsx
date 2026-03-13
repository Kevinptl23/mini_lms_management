import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import api from "../services/api";

export default function Centers() {
  const [centers, setCenters] = useState([]);

  const [form, setForm] = useState({});

  useEffect(() => {
    fetchCenters();
  }, []);

  const fetchCenters = async () => {
    const res = await api.get("/centers");

    setCenters(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const createCenter = async (e) => {
    e.preventDefault();

    await api.post("/centers", form);

    fetchCenters();
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="container mt-4">
        <h2>Create Center</h2>

        <form onSubmit={createCenter} className="row g-3">
          <input
            name="centerName"
            placeholder="Center Name"
            className="form-control"
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Center Email"
            className="form-control"
            onChange={handleChange}
          />

          <input
            name="password"
            placeholder="Password"
            className="form-control"
            onChange={handleChange}
          />

          <button className="btn btn-success">Create Center</button>
        </form>

        <h4 className="mt-4">Centers</h4>

        <table className="table">
          <thead>
            <tr>
              <th>Center</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {centers.map((c) => (
              <tr key={c._id}>
                <td>{c.centerName}</td>
                <td>{c.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
