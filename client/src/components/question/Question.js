import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Qestion.css";
import { QuizContext } from "../../context/quiz";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

const Question = ({ word, pos }) => {
  let { index, increaseIndx, setScore } = useContext(QuizContext);
  const [correct, setCorrect] = useState(false);
  const [wrong, setWrong] = useState(false);
  const navigator = useNavigate();

  const handleClick = (answer) => {
    if (index < 9) {
      if (answer === pos) {
        setScore();
        setCorrect(true);
      } else {
        setWrong(true);
      }
      setTimeout(() => increaseIndx(), 500);
    } else {
      navigator("/result");
    }
  };

  return (
    <Card className="questionCard">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {word}
          {correct && (
            <Alert
              variant="outlined"
              severity="success"
              className="alert"
              color="success"
            >
              Correct Answer
            </Alert>
          )}
          {wrong && (
            <Alert
              variant="outlined"
              severity="error"
              className="alert"
              color="error"
            >
              Correct Answer
            </Alert>
          )}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => handleClick("verb")}
          variant="contained"
          color="primary"
          disabled={correct || wrong}
        >
          Verb
        </Button>
        <Button
          onClick={() => handleClick("noun")}
          variant="contained"
          color="primary"
          disabled={correct || wrong}
        >
          Noun
        </Button>
        <Button
          onClick={() => handleClick("adverb")}
          color="primary"
          variant="contained"
          disabled={correct || wrong}
        >
          Adverb
        </Button>
        <Button
          onClick={() => handleClick("adjective")}
          variant="contained"
          disabled={correct || wrong}
        >
          Adjective
        </Button>
      </CardActions>
    </Card>
  );
};

export default Question;
