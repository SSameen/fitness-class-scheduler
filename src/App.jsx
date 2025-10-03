import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {

  <>
  <Route path="/Header" element={<Header />} />
  <Route path="/" element={<Home />} />
  <Route path="/Footer" element={<Footer />} />
  </>

  return <div className="container mt-5">Fitness Class Scheduler</div>;
}
export default App;