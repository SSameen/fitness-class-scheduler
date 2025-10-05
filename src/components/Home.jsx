import { useEffect, useState, useContext } from "react";
import { getClasses, deleteClass } from "../api/classApi";
import { Link } from "react-router-dom";
import { ThemeContext } from "../components/ThemeContext";

const Home = () => {
  const { isDark } = useContext(ThemeContext);
  const [classes, setClasses] = useState([]);

  const fetchData = async () => {
    try {
      const res = await getClasses();
      setClasses(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    await deleteClass(id);
    fetchData();
  };

  useEffect(() => { fetchData(); }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center"> Available Fitness Classes</h1>
      {classes.length === 0 ? (
        <p className="text-center">No classes found.</p>
      ) : (
        <div className="row">
          {classes.map((c) => (
            <div className="col-md-4 mb-4" key={c.id}>
              <div className={`card shadow h-100 ${isDark ? "bg-secondary text-light" : "bg-light text-dark"}`}>
                <div className="card-body">
                  <h5 className="card-title">{c.name}</h5>
                  <p className="card-text">
                    <strong>Trainer:</strong> {c.trainer}<br/>
                    <strong>Time:</strong> {c.time}<br/>
                    {c.level && <><strong>Level:</strong> {c.level}</>}
                  </p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <Link to={`/update/${c.id}`} className="btn btn-sm btn-warning"> Update</Link>
                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(c.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
