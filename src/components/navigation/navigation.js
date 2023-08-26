import React from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Navigation = (props) => {
  return (
    <>
      <Navbar withoutSidebar={props.withoutSidebar} />
      <Sidebar withoutSidebar={props.withoutSidebar} />
    </>
  );
};

export default Navigation;
