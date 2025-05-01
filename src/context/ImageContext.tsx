import React, { createContext, useContext, useState, ReactNode } from 'react';

type ImageContextType = {
  showFullImage: boolean;
  toggleFullImage: () => void;
  setShowFullImage: (value: boolean) => void;
};

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider = ({ children }: { children: ReactNode }) => {
  const [showFullImage, setShowFullImage] = useState(false);

  const toggleFullImage = () => {
    setShowFullImage(prev => !prev);
  };

  return (
    <ImageContext.Provider value={{ showFullImage, toggleFullImage, setShowFullImage }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImageContext must be used within an ImageProvider');
  }
  return context;
};
