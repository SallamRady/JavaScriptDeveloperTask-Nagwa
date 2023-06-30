import React from "react";
import "./HomePage.css";
import QuizIcon from "@mui/icons-material/Quiz";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  // variable declaration
  const navigator = useNavigate();

  // methods
  const handleGetQuiz = () => {
    navigator("/quiz");
  };
  // return view
  return (
    <div className="mainContiner">
      <h2>Improve your Skills with Nagwa Quizies </h2>
      <p>
        Research shows that testing yourself with flashcards is more effective
        than rereading your notes.
      </p>
      <Button
        variant="contained"
        onClick={handleGetQuiz}
        endIcon={<QuizIcon />}
      >
        Get Quick Quiz
      </Button>
    </div>
  );
};

export default HomePage;
