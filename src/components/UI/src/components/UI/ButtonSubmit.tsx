interface ButtonProps {
    disabled: boolean;
    icon: string;
    label: string
  }
  
  const ButtonSubmit: React.FC<ButtonProps> = ({ disabled, icon, label }) => {
    return (
      <button
        className="w-full mt-3 h-9 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 flex items-center justify-center "
        type="submit"
        disabled={disabled}
      >              
        <img src={icon} alt='' className="size-5 mr-2"/> {label}
      </button>
    );
  };
  
  export default ButtonSubmit;