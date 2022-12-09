import React from "react";

const ProfileInput = ({
  type,
  id,
  name,
  placeholder,
  required,
  onChange,
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
    ></input>
  );
};

export default ProfileInput;
