// src/components/BannerImageComp.tsx

import React from 'react';

interface BannerImageCompProps {
  title: string;
  description: string;
  image: string;
  background: string;
  onEdit: () => void;
}

const BannerImageComp: React.FC<BannerImageCompProps> = ({ title, description, image, background, onEdit }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${background})` }}>
      <div className="banner-overlay">
        <div className="banner-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <img src={image} alt={title} className="banner-image" />
        <button className="action-button">Start Now</button>
      </div>
      <button className="edit-button" onClick={onEdit}>
        ✏️
      </button>
    </div>
  );
};

export default BannerImageComp;
