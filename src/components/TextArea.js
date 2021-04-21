import {
  Grid,
  Button,
  TextField,
  makeStyles,
  Container,
} from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "10px 0",
    justifyContent: "center",
  },
  button: {
    margin: "5px 0",
  },
}));

const TextArea = ({ data }) => {
  const classes = useStyles();

  const [text, setText] = useState("");

  const handleText = () => {
    let arrayOfWords = text
      .replace(/[.\],[?/#!$%^&*;:{}=\-_`~()]/g, "")
      .replace(/(?:(the|a|an) +)/g, "")
      .toLowerCase()
      .split(" ");

    let wordCounts = {};
    for (let i = 0; i < arrayOfWords.length; i++) {
      var word = arrayOfWords[i];

      if (!wordCounts[word]) {
        wordCounts[word] = 1;
      } else {
        wordCounts[word]++;
      }
    }

    const objArray = [];
    Object.keys(wordCounts).forEach((key) =>
      objArray.push({
        value: key,
        count: wordCounts[key],
      })
    );

    data(objArray);
  };

  const handleChange = (event) => {
    setText(event.target.value);
    console.log(text);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text);

    handleText();
  };

  const handleClear = () => {
    setText("");
    data([]);
  };

  return (
    <Grid container style={{ minWidth: "350px" }} className={classes.root}>
      <Grid item xs={12}>
        <TextField
          value={text}
          onChange={handleChange}
          placeholder="Enter Text..."
          fullWidth
          multiline
          rowsMax={4}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Container>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            onClick={handleSubmit}
            fullWidth
          >
            Generate Word Cloud
          </Button>
        </Container>
      </Grid>

      <Grid item xs={12} md={6}>
        <Container>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            onClick={handleClear}
            fullWidth
          >
            Clear TextField
          </Button>
        </Container>
      </Grid>
    </Grid>
  );
};

export default TextArea;
