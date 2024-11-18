import React from "react";
import clsx from "clsx";

const InputText = ({
  classNames,
  placeholder,
  name,
  type = "text",
  value,
  onChange,
  required,
  error = "Please fill out this field",
}) => {
  return (
    <input
      className={clsx(
        "w-full px-4 py-3 bg-neutral focus:outline-none placeholder-accent text-sm",
        classNames
      )}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      onInvalid={(e) => e.target.setCustomValidity(error)}
      onInput={(e) => e.target.setCustomValidity("")}
    />
  );
};

export default InputText;
