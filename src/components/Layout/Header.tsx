import Logo from '../../assets/images/Logo.svg';
import LogoLight from '../../assets/images/Logo-light.svg';
import { useTheme } from '../../contexts/Theme/ThemeContext';
import ToogleThemeSwitch from '../UI/ToggleThemeSwitch';
import { useSlider } from "../../contexts/Slider/SliderContext";
import OpenSliderButton from '../Auth/OpenSliderButton';

export default function Header() {;
  const { isDarkMode } = useTheme();
  const { isOpen } = useSlider();

  return (
    <div className='grid grid-rows-2 grid-flow-col gap-4 -mt-6'>
      <div className='flex flex-row-reverse justify-between items-center'>
        <div>
          <ToogleThemeSwitch />
        </div>
        <div>{
          !isOpen ? <OpenSliderButton /> : null
        }</div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <img
            alt=""
            className="h-8"
            src={isDarkMode ? LogoLight : Logo}
          />
        </div>
        <div>
          <a href="#" className="text-blue-500 size-5">
            Criar conta
          </a>
        </div>
      </div>
    </div>
  );
}