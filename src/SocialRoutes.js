import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { MySocialApp } from "./Form/MySocialApp";
import { SinglePost } from "./Form/SinglePost";
// react redux
import { useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function SocialRoutes() {
  const themeValue = useSelector((state) => state.taggleTheme.value);
  console.log("themeValue=", themeValue);

  const theme = createTheme({
    palette: {
      mode: themeValue ? "dark" : "light",
    },
  });
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<MySocialApp />} />
          <Route path="/posts/:id" element={<SinglePost />} />
        </Routes>
      </ThemeProvider>
    </Fragment>
  );
}

export default SocialRoutes;
