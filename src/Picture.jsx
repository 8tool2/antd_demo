import React, { useState } from 'react';

function PictureBlocks() {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const selectedFiles = event.target.files;
    const newImages = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      const reader = new FileReader();
      const file = selectedFiles[i];

      reader.onload = () => {
        newImages.push(reader.result);
        if (newImages.length === selectedFiles.length) {
          setImages([...images, ...newImages]);
        }
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageUpload}
      />
      {images.length > 0 && (
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {images.map((image, index) => (
              <div key={index} style={{ marginRight: '10px', marginBottom: '10px' }}>
                <img src={image} alt={`Uploaded ${index}`} style={{ maxWidth: '200px', maxHeight: '200px' }} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PictureBlocks;
