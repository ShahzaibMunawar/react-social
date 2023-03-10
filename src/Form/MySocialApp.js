import React, { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useQuery } from "react-query";
import { getPostsPage } from "../api/SocialAPI";
import SocialCardComponent from "./CustomComponents/SocialCardComponent";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4 from "@mui/icons-material/Brightness4";
import Brightness7 from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "./ToggleThemeSlice";

export function MySocialApp(props) {
  // call redux data from store with useSelector
  // const themeValue = useSelector((state) => state.taggleTheme.value);
  const dispatch = useDispatch();
  // console.log("themeValue=", themeValue);

  // const theme = createTheme({
  //   palette: {
  //     mode: themeValue ? "dark" : "light",
  //   },
  // });

  const [expandedPostID, setExpandedPostID] = useState(-1);
  const [expanded, setExpanded] = useState(false);

  const [page, setPage] = useState(2);

  const {
    isLoading: isPostLoading,
    isError: isPostError,
    error: iserror,
    data: posts,
    isFetching,
    isPreviousData,
  } = useQuery(["/posts", page], () => getPostsPage(page), {
    keepPreviousData: true,
  });

  const { isLoading: isCommentsLoading, data: postCommentsData = [] } =
    useQuery(["commentsData", expandedPostID], (e) => {
      return fetch(
        `https://jsonplaceholder.typicode.com/posts/${e.queryKey[1]}/comments`
      ).then((res) => res.json());
    });

  if (isPostLoading) return "Loading...";

  if (iserror) return "An error has occurred: " + iserror.message;

  const nextPage = () => setPage((prev) => prev + 1);

  const prevPage = () => setPage((prev) => prev - 1);

  const loadComments = (postID) => {
    setExpandedPostID(postID);
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ flexGrow: 1 }} justifyItems={"center"} justifyContent="center">
      <Grid container spacing={2} justifyContent="center">
        <Grid
          justifyContent={"center"}
          textAlign="center"
          item
          xs={2}
          sm={4}
          md={4}
        >
          <Box className="nav-btn">
            <Button variant="outlined" onClick={prevPage} disabled={page === 1}>
              Prev Page
            </Button>
            <IconButton
              id="dark-mode"
              onClick={() => {
                dispatch(changeMode());
              }}
            >
              <Brightness7 />
            </IconButton>
            <Button
              variant="outlined"
              onClick={nextPage}
              disabled={!posts.length}
            >
              Next Page
            </Button>
          </Box>

          {posts.map((post) => (
            <SocialCardComponent
              key={post.id}
              expandedPostID={expandedPostID}
              isCommentsLoading={isCommentsLoading}
              loadComments={loadComments}
              postCommentsData={postCommentsData}
              post={post}
            ></SocialCardComponent>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default MySocialApp;
