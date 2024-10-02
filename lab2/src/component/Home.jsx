import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://6657369e9f970b3b36c865b0.mockapi.io/Images/')
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        setImages(data);
      });
  }, []);

  const move = (id) => {
    navigate(`/inform/${id}`);
  };

  return (
    <div className='grid grid-cols-3 justify-center max-sm:grid-cols-1 bg-gray-900'>
      {images.map((image) => (
        <div key={image.id} className="card m-auto w-96 mt-10 ">
          <figure>
            <img
              onClick={() => move(image.id)} // Corrected to use an arrow function
              className='w-[80%] cursor-pointer'
              src={image.image}
              alt="Image"
            />
          </figure>
        </div>
      ))}
    </div>
  );
}

export default Home;
