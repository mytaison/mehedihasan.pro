import React from "react";

interface InputFieldProps {
  type: "text" | "password" | "email";
  name: string;
  id: string;
  placeholder: string;
  required?: boolean;
  errorFound?: boolean;
}
const InputField: React.FC<InputFieldProps> = ({
  type,
  name,
  id,
  placeholder,
  required = false,
  errorFound = false,
}) => {
  return (
    <input
      className={`form__input block w-full  bg-[#e8e8e8] dark:bg-[#2425407d] focus:neumorph-convex dark:focus:neumorph-convex-dark rounded-lg ${
        errorFound ? "border-0 border-solid border-b-2 border-b-red-300" : ""
      }`}
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default InputField;
