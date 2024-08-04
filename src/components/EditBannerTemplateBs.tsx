// src/components/EditBannerTemplateBs.tsx

import React, { useState } from 'react';

interface EditBannerTemplateBsProps {
  banner: any;
  onSave: (updatedBanner: any) => void;
  onClose: () => void;
}

const EditBannerTemplateBs: React.FC<EditBannerTemplateBsProps> = ({ banner, onSave, onClose }) => {
  const [title, setTitle] = useState(banner.title);
  const [description, setDescription] = useState(banner.description);
  const [image, setImage] = useState(banner.image);
  const [background, setBackground] = useState(banner.background);

  const handleSave = () => {
    onSave({ ...banner, title, description, image, background });
  };

  return (
    <div className="bottom-sheet">
      <div className="content">
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" />
        <input value={background} onChange={(e) => setBackground(e.target.value)} placeholder="Background URL" />
        <div className="flex justify-end">
          <button className="save-button" onClick={handleSave}>Save</button>
          <button className="cancel-button" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditBannerTemplateBs;
