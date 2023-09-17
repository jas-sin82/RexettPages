import React from "react";
import Navigation from "../../navigation/Navigation";
import { Outlet } from "react-router-dom";

const Services = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};
export default Services;
