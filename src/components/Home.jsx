import { useEffect,useState } from "react";
import { getClasses, deleteClass } from "../api/classApi";
import { Link } from "react-router-dom";

const Home=()=>{
    const[classes,setClasses]=useState([]);

    const fetchData=async () => {
        const res=await getClasses();
        setClasses(res.data);
    };

    const handleDelete=async (id) => {
        await deleteClass(id);
        fetchData();
    }
    useEffect(()=>{
        fetchData();
    },[]);

    return(
        <div className="container mt-4">
            <Link to="/add" className="btn btn-success mb-3">Add Class</Link>
            <div className="row">
                {classes.map(cls=>(
                    <div className="col-md-4" key={cls.id}>
                        <div className="shadow-sm mb-3">
                            <div className="card-body">
                            <h1 className="card-title">{cls.name}</h1>
                            <p className="card-text">Trainer: {cls.trainer}</p>
                            <p className="card-text">Time: {cls.time}</p>
                            <p className="card-text">Level: {cls.level}</p>
                            <Link to={`/update/,${cls.id}`} className="btn btn-warning me-2">Update</Link>
                            <button onClick={()=>handleDelete(cls.id)} className="btn btn-danger">Delete</button>
                            </div>
                            </div>
                            </div>
                ))}
            </div>
        </div>
    )
}
export default Home;
