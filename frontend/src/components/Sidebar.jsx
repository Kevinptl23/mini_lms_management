import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-dark text-white p-3 vh-100" style={{ width: "220px" }}>
      <h4 className="mb-4">Mini LMS</h4>

      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/admin">
            Dashboard
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="/courses">
            Courses
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="/students">
            Students
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="/centers">
            Centers
          </Link>
        </li>
      </ul>
    </div>
  );
}
