import { Link } from "react-router-dom";

const Header = ({ toggleTheme, isDark }) => (
  <nav className={`navbar navbar-expand-lg ${isDark ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} px-3`}>
    <Link className="navbar-brand d-flex align-items-center" to="/">
      <img src="/logo.png" alt="Logo" width="40" className="me-2"/>
      Fitness Scheduler
    </Link>
    <button onClick={toggleTheme} className="btn btn-outline-primary ms-auto">
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  </nav>
);

export default Header;
