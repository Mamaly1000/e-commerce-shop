"use client";

import { DollarSign } from "lucide-react";
import { forwardRef, HTMLInputTypeAttribute } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface inputProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  type?: HTMLInputTypeAttribute | undefined;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<any>;
  errors: FieldErrors;
  min?: number;
  max?: number;
}
const Input = forwardRef<HTMLInputElement, inputProps>(
  (
    {
      id,
      label,
      type = "text",
      disabled,
      formatPrice,
      register,
      errors,
      min,
      max,
    },
    _ref
  ) => {
    return (
      <div className="w-full relative">
        {formatPrice && (
          <DollarSign
            size={24}
            className="text-gray-500 absolute top-5 start-2"
          />
        )}
        <input
          id={id}
          disabled={disabled}
          {...register(id)}
          placeholder=" "
          className={twMerge(
            " peer w-full bg-white dark:bg-[#121212] text-black p-4 pt-6 font-light border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed ",
            formatPrice ? "pl-9" : "pl-4",
            errors[id]
              ? "border-gray-500 dark:border-gray-700500 focus:border-gray-500 dark:border-gray-700500"
              : "hover:border-gray-500 dark:border-gray-700500 focus:border-gray-500 dark:border-gray-700500"
          )}
          type={type}
          min={min}
          max={max}
        />
        <label
          htmlFor={id}
          className={twMerge(
            `capitalize absolute text-base duration-150 -translate-y-3 top-5 z-10 origin-[0] 
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0 
            peer-focus:scale-75
            peer-focus:-translate-y-4`,
            formatPrice ? "left-9" : "left-4",
            errors[id] ? "text-gray-500" : "text-zinc-500"
          )}
        >
          {label}
        </label>
        {errors && errors[id] && (
          <p className="text-[12px] text-red-500 min-w-full max-w-full">
            {errors![id]?.message?.toString() as string}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";
export default Input;
