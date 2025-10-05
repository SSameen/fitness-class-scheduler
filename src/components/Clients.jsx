import { useEffect, useState } from "react";
import { getClients, getClasses } from "../api/classApi";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const clsRes = await getClasses();
      const cltRes = await getClients();
      setClasses(clsRes.data);
      setClients(cltRes.data);
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Enrolled Clients</h2>
      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th>Client Name</th>
            <th>Enrolled Class</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(c => {
            const cls = classes.find(cl => parseInt(cl.id) === c.enrolledClass);
            return (
              <tr key={c.id}>
                <td>{c.name}</td>
                <td>{cls ? cls.name : "—"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Clients;
