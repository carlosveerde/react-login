import React from 'react';

interface InputProps {
  type: string;
  placeholder: string;
  label: string;
  icon: JSX.Element;
  toggleIcon?: JSX.Element; 
  showPassword?: boolean;
  setShowPassword?: (value: boolean) => void; 
}

const Input: React.FC<InputProps> = ({ type, placeholder, label, icon, toggleIcon, showPassword, setShowPassword }) => {
  return (
    <div className="mt-3">
      <label className="block text-black dark:text-neutral-200">{label}</label>
      <div className="mt-2 relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          {icon}
        </span>
        <input
          type={showPassword ? "text" : type}
          className="
            w-full p-2 border 
            dark:border-neutral-600 dark:bg-neutral-800 border-neutral-400 text-neutral-600 
            hover:dark:border-blue-600 focus:dark:border-blue-700
            hover:border-blue-600 focus:border-blue-700
            placeholder:text-neutral-600 rounded-lg pl-10 focus:outline-none
          "
          placeholder={placeholder}
        />
        {toggleIcon && setShowPassword && (
          <span
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {toggleIcon}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;