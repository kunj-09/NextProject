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
    <div className="banner ml-10" style={{ backgroundImage: `url(${background})` }}>
      <div className="banner-overlay">
        <div className="banner-text">
          <h2>{title}</h2>
          <p>{description}</p>
          <button className="action-button">Start Now</button>
        </div>
        <img src={image} alt={title} className="banner-image" />
      </div>
      <button className="edit-button" onClick={onEdit}>
        ✏️
      </button>
    </div>
  );
};

export default BannerImageComp;