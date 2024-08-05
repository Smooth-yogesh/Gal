// src/components/Modal.js
import React from 'react';

// Get the index of the current image in the images array
const findImageIndex = (images, imageId) => {
  return images.findIndex(image => image.id === imageId);
};

const Modal = ({ image, onClose, images, onNavigate }) => {
  const { src, alt, id } = image;
  const currentIndex = findImageIndex(images, id);
  const previousIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  const handlePrevious = () => {
    onNavigate(images[previousIndex]);
  };

  const handleNext = () => {
    onNavigate(images[nextIndex]);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <img src={src} alt={alt} />
        <button className="close-btn" onClick={onClose}>Close</button>
        <button className="nav-btn prev" onClick={handlePrevious}>Previous</button>
        <button className="nav-btn next" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Modal;
