import React from 'react';

interface IProps {
  value: string;
  onChange: (value: string) => void;
}

const Input = ({ value, onChange }: IProps) => (
  <input
    type="text"
    value={value}
    onChange={(e) => {
      e.preventDefault();
      onChange(e.target.value);
    }}
  />
);

export default Input;
