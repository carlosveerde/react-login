export interface SliderContextType {
    isOpen: boolean;
    currentImage: number;
    images: string[];
    toggleSlider: () => void;
    changeImage: (newIndex: number) => void;
    nextImage: () => void;
    prevImage: () => void;
  }