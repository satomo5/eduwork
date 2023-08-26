import React from "react";

const InputBuilder = (props) => {
  let html = null;
  const allClass = `p-2 rounded-sm w-full`;
  const data = {
    ...props,
    className: `${allClass}${props.className ? ` ${props.className}` : ""}`,
  };

  delete data.typeForm

  switch (props.typeForm) {
    case "input":
      html = (
        <>
          <input {...data} />
        </>
      );
      break;

    case "textarea":
      data.className += ' min-h-[150px]'
      html = (
        <>
          <textarea {...data} />
        </>
      );
      break;

    default:
      break;
  }

  return html;
};

export default InputBuilder;
