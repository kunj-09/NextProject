// src/components/Overlay.tsx

import React from 'react';

interface OverlayProps {
  image: string;
  title: string;
  description: string;
  background: string;
  onClose: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ image, title, description, background, onClose }) => {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt={title} className="enlarged-image" />
        <div className="overlay-info" style={{ backgroundImage: `url(${background})` }}>
          <h2 className="overlay-title">{title}</h2>
          <p className="overlay-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
