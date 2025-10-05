import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";

const Footer = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <footer className={`text-center py-3 mt-4 ${isDark ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <div className="container">
        © {new Date().getFullYear()} Fitness Scheduler | Built BY ATHLE_VERSE
      </div>
    </footer>
  );
};

export default Footer;
