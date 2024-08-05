// src/components/ImageItem.js
import React from 'react';

const ImageItem = ({ image, onClick }) => (
  <div className="image-item" onClick={onClick}>
    <img src={image.src} alt={image.alt} />
  </div>
);

export default ImageItem;
