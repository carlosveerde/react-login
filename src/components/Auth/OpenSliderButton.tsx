import { IoIosArrowForward } from "react-icons/io";
import { useSlider } from "../../contexts/Slider/SliderContext";

function OpenSliderButton() {
  const { toggleSlider } = useSlider();

  return (
    <div>
      <button
        className="
          flex items-center justify-center bg-transparent border 
          border-black p-2.5 rounded-full cursor-pointer transition-all duration-300 
          dark:border-white hover:border-blue-700 dark:hover:border-blue-700
          text-white hover:text-blue-700 dark:hover:text-blue-700
        "
        onClick={toggleSlider}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}

export default OpenSliderButton;