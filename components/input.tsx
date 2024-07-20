import { Info } from '@/assets/svgs/Icons';
import { InputProps } from '@/types/common';
import React from 'react';
import CustomTooltip from './tooltip';

const Input: React.FC<InputProps> = ({
  label,
  stateName,
  inputType,
  value,
  labelClassName,
  inputClassName,
  min,
  max,
  step,
  disabled,
  required,
  info,
  placeholder,
  onChange,
}) => {
  return (
    <div
      className={`flex items-center m-3 ${inputType === 'range' ? 'flex-col' : 'flex-row'}`}
    >
      {label && (
        <div
          className={`text-start ${inputType === 'range' ? 'min-w-full' : labelClassName ? labelClassName : 'sm:w-2/5 w-[50%]'}`}
        >
          <label
            className={`text-gray-500 font-bold mb-1 md:mb-0 pr-4`}
            htmlFor={label}
          >
            {label}
          </label>
          {info && (
            <CustomTooltip title="You don't have permission to do this">
              <Info width={25} height={25} className="inline-block" />
            </CustomTooltip>
          )}
        </div>
      )}
      <div
        className={`flex items-center ${inputType === 'range' ? 'w-full flex mt-2' : inputClassName ? inputClassName : 'w-3/5'}`}
      >
        <input
          className={`items-center bg-gray-200  focus:bg-white border-2 border-gray-200 focus:border-[#00774D] rounded w-full py-2 px-4 text-gray-700 text-center leading-tight } ${inputType === 'range' ? 'sm:w-4/5 w-[40%]' : ''} `}
          id={label}
          name={stateName}
          type={inputType}
          value={value}
          {...(inputType === 'number' ? { inputMode: 'numeric' } : '')}
          {...(inputType === 'range' ? { min, max, step } : '')}
          {...(disabled ? { disabled: disabled } : {})}
          {...(required ? { required: required } : {})}
          {...(placeholder ? { placeholder: placeholder } : {})}
          {...(onChange
            ? {
                onChange: (e) => {
                  onChange(e, inputType);
                },
              }
            : {})}
        />
        {inputType === 'range' && (
          <input
            type="number"
            name={stateName}
            value={value}
            {...(onChange
              ? {
                  onChange: (e) => {
                    onChange(e, inputType);
                  },
                }
              : {})}
            className={`ml-3 sm:w-1/5 w-[60%] bg-gray-200  focus:bg-white border-2 border-gray-200 focus:border-[#00774D] rounded py-2 px-4 text-gray-700 text-center leading-tight }`}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
