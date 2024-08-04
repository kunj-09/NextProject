// src/components/HomePage.tsx

"use client";

import React, { useState } from 'react';
import BannerImageComp from '@/components/BannerImageComp';
import EditBannerTemplateBs from '@/components/EditBannerTemplateBs';
import bannersData from '@/data/banners.json';

const HomePage: React.FC = () => {
  const [banners, setBanners] = useState(bannersData);
  const [editingBanner, setEditingBanner] = useState<any | null>(null);

  const handleEditClick = (banner: any) => {
    setEditingBanner(banner);
  };

  const handleSave = (updatedBanner: any) => {
    setBanners(banners.map(b => b.id === updatedBanner.id ? updatedBanner : b));
    setEditingBanner(null);
  };

  const handleClose = () => {
    setEditingBanner(null);
  };

  return (
    <div className="banner-container">
      {banners.map((banner) => (
        <BannerImageComp
          key={banner.id}
          title={banner.title}
          description={banner.description}
          image={banner.image}
          background={banner.background}
          onEdit={() => handleEditClick(banner)}
        />
      ))}
      {editingBanner && (
        <EditBannerTemplateBs
          banner={editingBanner}
          onSave={handleSave}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default HomePage;
