import React from "react";

const Container = (props) => {
  return (
    <div className="mx-auto xl:max-w-[1200px] lg:max-w-[990px] md:max-w-[700px] sm:max-w-[550px]">
      {props.children}
    </div>
  )
};

export default Container;
