// Gallery.js
import React from 'react';

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Gallery ${index + 1}`} />
      ))}
    </div>
  );
};

export default Gallery;
