import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { useQuery } from "react-query";

// Card
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export function SinglePost(props) {
  const Postpram = useParams();
  const {
    isLoading: isPostLoading,
    error: isPostError,
    data = [],
  } = useQuery("postComments", (e) => {
    return fetch(
      `https://jsonplaceholder.typicode.com/posts/${Postpram.id}`
    ).then((res) => res.json());
  });
  if (isPostError) {
    return "error";
  }
  if (isPostLoading) {
    return "Loading Posts ...";
  }
  console.log(data);
  return (
    <>
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
            <h1>Welcome User {Postpram.id}</h1>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div"></Typography>
                <Typography color="text.secondary">{data.title}</Typography>
                <Typography variant="body2">
                  {data.body}

                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Like</Button>
                <Button size="small">Comments</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default SinglePost;
