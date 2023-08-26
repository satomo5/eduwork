import React from "react";

const TYPE = {
  primary: 'text-white bg-blue-700 hover:bg-blue-800',
  secondary: 'text-white bg-gray-700 hover:bg-gray-800',
  secondary_outlined: 'border-gray-700 border hover:text-white hover:bg-gray-800 hover:border-gray-800',
}

const Button = (props) => {
  const typeClass = TYPE[`${props.type || 'primary'}${props.outlined ? '_outlined' : ''}`] || TYPE.primary;
  const allClass = `${typeClass} font-medium rounded-lg text-sm px-2.5 py-2.5 flex items-center gap-2 duration-150`

  return (
    <button
      type="button"
      className={allClass}
      onClick={() => {
        props.onClick && props.onClick()
      }}
    >
      {props.children}
    </button>
  )
};

export default Button;
