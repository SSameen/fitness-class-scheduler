import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";
import logo from "../assets/logo.png";

const Header = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar navbar-expand-lg ${isDark ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <img src={logo} alt="Fitness Scheduler Logo" style={{ height: "40px", marginRight: "10px" }} />
          Fitness Scheduler
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/add">Add Class</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/clients">Clients</Link></li>
            <li className="nav-item ms-3">
              <button className={`btn btn-sm ${isDark ? "btn-light" : "btn-dark"}`} onClick={toggleTheme}>
                {isDark ? "Light Mode" : "Dark Mode"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
