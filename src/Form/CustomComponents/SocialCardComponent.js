import React, { Fragment, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";

function SocialCardComponent(props) {
  return (
    <Card
      sx={{
        bgcolor: "background.paper",
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        marginTop: 1.5,
        marginBottom: 1.5,
      }}
    >
      <ButtonBase
        disableTouchRipple={true}
        component={Link}
        to={`/posts/${props.post.id}`}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.post.body}
          </Typography>
        </CardContent>
      </ButtonBase>

      <CardActions>
        <Button size="small">Like</Button>
        <Button
          size="small"
          onClick={() => props.loadComments(props.post.id)}
          expand={props.post.id === props.expandedPostID}
          aria-expanded={props.post.id === props.expandedPostID}
          aria-label="show more"
          key={props.post.id}
        >
          Comments
        </Button>
      </CardActions>

      <Collapse
        in={props.post.id === props.expandedPostID}
        timeout="auto"
        unmountOnExit
      >
        <CardContent>
          {!props.isCommentsLoading
            ? props.postCommentsData.map((item) => (
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
  );
}

export default SocialCardComponent;
