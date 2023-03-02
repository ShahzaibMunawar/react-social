import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { MySocialApp } from "./Form/MySocialApp";
import { SinglePost } from "./Form/SinglePost";

function SocialRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MySocialApp />} />
      <Route path="/posts/:id" element={<SinglePost />} />
    </Routes>
  );
}

export default SocialRoutes;
