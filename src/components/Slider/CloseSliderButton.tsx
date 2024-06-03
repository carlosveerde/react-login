import { IoIosArrowBack } from "react-icons/io";
import { useSlider } from "../../contexts/Slider/SliderContext";

function CloseSliderButton() {
  const { toggleSlider } = useSlider();

  return (
    <div className="absolute left-5 hidden lg:block md:block">
      <button
        className="mt-5 w-10 h-10 border-white text-white rounded-full flex items-center justify-center"
        onClick={toggleSlider}
      >
        <IoIosArrowBack />
      </button>
    </div>
  );
}

export default CloseSliderButton;