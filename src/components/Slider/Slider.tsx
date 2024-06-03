import CloseSliderButton from "./CloseSliderButton";
import Content from "./Content";
import ImagePagination from "./ImagePagination";
import { useSlider } from "../../contexts/Slider/SliderContext";

export default function SliderContainer() {
  const { isOpen, images, currentImage } = useSlider();
  return (
    <div
      className={`bg-cover shadow-inner shadow-2xl hidden lg:block md:block ${isOpen ? 'w-2/3' : 'w-0'}`}
      style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1) 0%, transparent 100%), url(${images[currentImage]})`}}
    >
      {isOpen && (
        <div className="h-full flex justify-between p-5">
          <CloseSliderButton />
          <div className="text-white flex flex-col justify-end py-6 px-4">
            <Content />
            <ImagePagination />
          </div>
        </div>
      )}
    </div>
  );
}