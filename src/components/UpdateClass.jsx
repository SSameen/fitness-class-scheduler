import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getClasses, updateClass } from '../api/classApi.js';

const UpdateClass = () => {
  const [formData, setFormData] = useState({ name: '', trainer: '', time: '', level: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClass = async () => {
      const res = await getClasses();
      const cls = res.data.find(c => c.id === parseInt(id));
      setFormData(cls);
    };
    fetchClass();
  }, [id]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateClass(id, formData);
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h3>Update Class</h3>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" name="name" value={formData.name} onChange={handleChange} />
        <input className="form-control mb-2" name="trainer" value={formData.trainer} onChange={handleChange} />
        <input className="form-control mb-2" name="time" value={formData.time} onChange={handleChange} />
        <input className="form-control mb-2" name="level" value={formData.level} onChange={handleChange} />
        <button className="btn btn-primary">Update Class</button>
      </form>
    </div>
  );
};

export default UpdateClass;
