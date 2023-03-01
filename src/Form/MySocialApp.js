import React, { Fragment, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";

import { useQuery } from "react-query";

export function MySocialApp(props) {
  const [expandedPostID, setExpandedPostID] = useState(-1);
  const [expanded, setExpanded] = useState(false);

  const {
    isLoading,
    error,
    data = [],
  } = useQuery("repoData", (e) => {
    return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
      res.json()
    );
  });

  const { isLoading: isCommentsLoading, data: postCommentsData = [] } =
    useQuery(["commentsData", expandedPostID], (e) => {
      console.log(e);
      return fetch(
        `https://jsonplaceholder.typicode.com/posts/${e.queryKey[1]}/comments`
      ).then((res) => res.json());
    });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

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
          {data.map((post) => (
            <Card key={post.id}>
              <ButtonBase
                disableTouchRipple={true}
                component={Link}
                to={`/posts/${post.id}`}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.body}
                  </Typography>
                </CardContent>
              </ButtonBase>

              <CardActions>
                <Button size="small">Like</Button>
                <Button
                  size="small"
                  onClick={() => loadComments(post.id)}
                  expand={post.id === expandedPostID}
                  aria-expanded={post.id === expandedPostID}
                  aria-label="show more"
                  key={post.id}
                >
                  Comments
                </Button>
              </CardActions>

              <Collapse
                in={post.id === expandedPostID}
                timeout="auto"
                unmountOnExit
              >
                <CardContent>
                  {!isCommentsLoading
                    ? postCommentsData.map((item) => (
                        <Fragment key={`${item.id}${item.postId}`}>
                          <Typography paragraph>{item.name}</Typography>
                          <Typography paragraph>{item.email}</Typography>
                          <Typography paragraph>{item.body}</Typography>
                        </Fragment>
                      ))
                    : "loading"}
                </CardContent>
              </Collapse>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default MySocialApp;
