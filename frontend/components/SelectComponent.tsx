import React from "react";

interface SelectComponentProps {
  label?: string;
  value: string;
  options: Array<{ value: string; label: string }>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
}

const SelectComponent: React.FC<SelectComponentProps> = ({
  label,
  value,
  options = [],
  onChange,
  placeholder = "Select option",
}) => {
  return (
    <div className='mb-6'>
      {label && (
        <label className='block text-sm font-medium text-header_black mb-[10px]'>
          {label}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        className='w-full p-3 text-sm bg-[#FAFAFA] border border-gray-[#EBECE6] rounded-md text-header_black font-light focus:outline-none focus:ring-2 focus:ring-blue-500'
      >
        <option className='text-header_black font-light' value=''>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;
