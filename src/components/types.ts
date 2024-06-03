export interface ImageIndicatorsProps {
    totalImages: number;
    currentImage: number;
    onChangeImage: (index: number) => void;
  }