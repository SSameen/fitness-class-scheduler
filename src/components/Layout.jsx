import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useTheme } from "./ThemeContext";

const Layout = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <Header toggleTheme={toggleTheme} isDark={isDark} />
      <main className="container my-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
