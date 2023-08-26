import React from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Navigation = (props) => {
  return (
    <>
      <Navbar />
      {!props.withoutSidebar && <Sidebar />}
    </>
  );
};

export default Navigation;
