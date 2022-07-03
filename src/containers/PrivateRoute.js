import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeContainer } from "./index";

const PrivateRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
      </Routes>
    </BrowserRouter>
  );
};
export default PrivateRoute;
