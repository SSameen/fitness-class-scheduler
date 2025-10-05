import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddClass from "./components/AddClass";
import Clients from "./components/Clients";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddClass />} />
          <Route path="/update/:id" element={<AddClass />} />
          <Route path="/clients" element={<Clients />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
