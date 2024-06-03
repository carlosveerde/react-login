import React, { createContext, useContext, useState } from "react";
import { SliderContextType } from "./types.props";

const SliderContext = createContext<SliderContextType>({
  images: [],
  isOpen: true,
  currentImage: 0,
  toggleSlider: () => {},
  changeImage: () => {},
  nextImage: () => {},
  prevImage: () => {},
});

export const useSlider = () => useContext(SliderContext);

export const SliderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const images = ["banner.png"];
  const [isOpen, setOpen] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const toggleSlider = () => setOpen(!isOpen);

  const changeImage = (newIndex: number) => {
    if (newIndex >= 0 && newIndex < images.length) {
      setCurrentImage(newIndex);
    }
  };

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <SliderContext.Provider
      value={{
        images,
        isOpen,
        currentImage,
        toggleSlider,
        changeImage,
        nextImage,
        prevImage,
      }}
    >
      {children}
    </SliderContext.Provider>
  );
};