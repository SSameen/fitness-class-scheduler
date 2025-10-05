import { useState, useEffect, useContext } from "react";
import { addClass, updateClass, getClasses } from "../api/classApi";
import { useNavigate, useParams } from "react-router-dom";
import { ThemeContext } from "../components/ThemeContext";

const AddClass = () => {
  const { isDark } = useContext(ThemeContext);
  const [formData, setFormData] = useState({ name: "", trainer: "", time: "", level: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getClasses().then(res => {
        const existing = res.data.find(c => c.id === id);
        if (existing) setFormData(existing);
      });
    }
  }, [id]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) await updateClass(id, formData);
    else await addClass(formData);
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h2>{id ? "Update Class" : "Add New Class"}</h2>
      <form
        onSubmit={handleSubmit}
        className={`p-3 border rounded shadow-sm ${isDark ? "bg-secondary text-light" : "bg-light text-dark"}`}
      >
        <div className="mb-3">
          <label className="form-label">Class Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Trainer</label>
          <input type="text" name="trainer" value={formData.trainer} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Time</label>
          <input type="text" name="time" value={formData.time} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Level</label>
          <input type="text" name="level" value={formData.level} onChange={handleChange} className="form-control" />
        </div>
        <button type="submit" className="btn btn-success">{id ? "Update Class" : "Add Class"}</button>
      </form>
    </div>
  );
};

export default AddClass;
