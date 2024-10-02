import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Inform() {
  const [info, setInfo] = useState({});
  const { id } = useParams();
const navigate = useNavigate()
  useEffect(() => {
    fetch(`https://6657369e9f970b3b36c865b0.mockapi.io/Images/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInfo(data);
      });
  }, [id]);
  const home =()=>{
    navigate('/')
  }

  return (
    <div className="bg-gray-900 h-screen">
        <div className="w-[60%] m-auto pt-20 ">
      <div className="card card-side bg-base-100 shadow-xl rounded-none">
        <figure>
          <img src={info.image} alt="Character" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{info.name}</h2> {/* Assuming name is part of the data */}
          <p>Hair Color: {info.hair}</p> {/* Assuming hairColor is part of the data */}
          <p>State: {info.status}</p> {/* Assuming status is part of the data */}
          <p>Class: {info.species}</p> {/* Assuming category is part of the data */}
          <p>Gender: {info.gender}</p> {/* Assuming gender is part of the data */}
          <p>Plate : {info.origin}</p> {/* Assuming planet is part of the data */}
          <button className="btn bg-gray-950 text-white font-bold text-2xl" onClick={home}>Back</button>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Inform;
