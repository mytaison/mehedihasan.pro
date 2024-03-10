import React from "react";

interface InputTextAreaProps {
  rows?: number;
  cols?: number;
  maxLength?: number;
  name: string;
  id: string;
  placeholder: string;
  required?: boolean;
  errorFound?: boolean;
}
const InputTextArea: React.FC<InputTextAreaProps> = ({
  rows = 2,
  cols = 10,
  maxLength = 2000,
  name,
  id,
  placeholder,
  required,
  errorFound = false,
}) => {
  return (
    <textarea
      className={`form__input block w-full bg-[#e8e8e8] dark:bg-[#2425407d] focus:neumorph-convex dark:focus:neumorph-convex-dark rounded-lg ${
        errorFound ? "border-0 border-solid border-b-2 border-b-red-300" : ""
      }`}
      rows={rows}
      cols={cols}
      maxLength={maxLength}
      name={name}
      id={id}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default InputTextArea;
