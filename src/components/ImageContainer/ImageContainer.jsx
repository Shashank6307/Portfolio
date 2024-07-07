import React, { useState } from "react";
import "./ImageContainer.scss";

const ImageContainer = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageHover = (index) => {
    setCurrentImageIndex(index);
  };
  return (
    <div className="image-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={currentImageIndex === index ? "visible" : "hidden"}
          onMouseEnter={() => handleImageHover(index)}
        />
      ))}
    </div>
  );
};

export default ImageContainer;
