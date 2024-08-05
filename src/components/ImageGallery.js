// src/components/ImageGallery.js
import React, { useState } from 'react';
import ImageItem from './ImageItem';
import Modal from './Modal';


const images = [
  { id: 1, src: 'https://i.pinimg.com/564x/f3/7e/de/f37ede46bc79c4297bae8bb3aa2a519e.jpg', alt: 'Image 1' },
  { id: 2, src: 'https://i.pinimg.com/736x/3c/08/0a/3c080a4fd77f99e9daa2053557c42299.jpg', alt: 'Image 2' },
  { id: 3, src: 'https://i.pinimg.com/564x/3a/cf/e6/3acfe6e20fb150000da920999ba1a67c.jpg', alt: 'Image 3' },
  { id: 4, src: 'https://i.pinimg.com/564x/3e/ea/e9/3eeae985255f49cf0dc5827f1a118512.jpg', alt: 'Image 4' },
  { id: 5, src: 'https://i.pinimg.com/736x/e6/b8/32/e6b83228c468135c85a4cc5ab320c1ac.jpg', alt: 'Image 5' },
  { id: 6, src: 'https://i.pinimg.com/564x/93/1a/61/931a616a62e49de6c888c91f93351c9e.jpg', alt: 'Image 6' },
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);
  const navigateToImage = (image) => setSelectedImage(image);

  return (
    <div>
      <div className="gallery">
        {images.map(image => (
          <ImageItem key={image.id} image={image} onClick={() => openModal(image)} />
        ))}
      </div>
      {selectedImage && (
        <Modal 
          image={selectedImage} 
          onClose={closeModal} 
          images={images} 
          onNavigate={navigateToImage} 
        />
      )}
    </div>
  );
};

export default ImageGallery;
