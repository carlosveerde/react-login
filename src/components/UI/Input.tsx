import React from 'react';
import { Field } from 'formik';

interface InputProps {
  id: string;
  type: string;
  placeholder: string;
  label: string;
  icon: JSX.Element;
  toggleIcon?: JSX.Element; 
  showPassword?: boolean;
  setShowPassword?: (value: boolean) => void; 
  error?: string | undefined;
  isValid?: boolean;
}

const Input: React.FC<InputProps> = ({ id, type, placeholder, label, icon, toggleIcon, showPassword, setShowPassword, error, isValid }) => {
  return (
    <div className="mt-3">
      <label className="block text-black dark:text-neutral-200">{label}</label>
      <div className="mt-2 relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          {icon}
        </span>
        <Field
          id={id}
          name={id}
          type={showPassword ? "text" : type}
          className={`
            w-full p-2 border text-black dark:bg-neutral-800 dark:text-neutral-200
            ${error 
              ? 'border-red-500 dark:border-red-500' 
              : isValid ? 'border-green-600 dark:border-green-600' 
              : 'border-neutral-400 hover:dark:border-blue-600 focus:dark:border-blue-700 hover:border-blue-600 focus:border-blue-700 dark:border-neutral-600 '}
            placeholder:text-neutral-600 rounded-lg pl-10 focus:outline-none
          `}
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
      {error && <div className="text-red-500 text-sm pt-1">{error}</div>}
    </div>
  );
};

export default Input;