import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';


function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=8761127-15c354fd40a23de8d36bfe25d&q=yellow%20flowers&image_true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <div style={{backgroundColor:"#000"}}>
      <div style={{color:"#90EE90"}} className="container mx-auto">
      <h1 className = 'lg: text-9xl md: text-7xl sm: text-5xl text-3xl font-black mb-14 text-center'> Welcome TO Image Gallery </h1>

      {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1> }

      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-3 gap-4">
        {images.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>}
    </div>
    </div>
  );
}

export default App;
