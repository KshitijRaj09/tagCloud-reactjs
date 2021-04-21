import { TagCloud } from "react-tagcloud";
import React, { useState } from "react";
import TextArea from "./components/TextArea";
import { Container, Typography, makeStyles } from "@material-ui/core";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    minWidth: "400px",
  },

  tagCloudContainer: {
    padding: "10px",
    border: "1px solid",
    borderRadius: "5px",
    marginTop: "20px",
    minWidth: "350px",
    alignItems: "center",
    maxWidth: "100%",
    wordBreak: "break-word",
  },
}));

const options = {
  luminosity: "dark",
  hue: "green",
};

export default function App() {
  const classes = useStyles();

  const title = "Word Cloud Generator";

  const [data, setData] = useState([]);
  const [display, setDisplay] = useState(false);
  const [tagDetails, setTagDetails] = useState({ tag: "", count: "" });

  const setDataHandler = (d) => {
    setData(d);
  };

  const show = (tag) => {
    setDisplay(true);
    setTagDetails({ tag: tag.value, count: tag.count });
  };
  const hide = () => {
    setDisplay(false);
  };

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Typography variant="h3" color="textSecondary" align="center">
        {title}
      </Typography>

      <div className={display ? "showing" : "hidden"}>
        <Typography color="textSecondary" variant="h5">
          '{tagDetails.tag}' has count '{tagDetails.count}'
        </Typography>
      </div>

      <TextArea data={setDataHandler} />
      <Container className={classes.tagCloudContainer}>
        <TagCloud
          minSize={20}
          maxSize={70}
          tags={data}
          colorOptions={options}
          onMouseOver={show}
          onMouseOut={hide}
        />
      </Container>
    </Container>
  );
}
