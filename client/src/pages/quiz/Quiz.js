import React, { useState, useEffect, useContext } from "react";
import KeyboardDoubleArrowRightTwoToneIcon from "@mui/icons-material/KeyboardDoubleArrowRightTwoTone";
import Question from "../../components/question/Question";
import LoadingPage from "../../components/loading/Loading";
import axios from "axios";
import "./Quiz.css";
import { QuizContext } from "../../context/quiz";

const Quiz = () => {
  let { index } = useContext(QuizContext);
  const [quizions, setQuizions] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:8000/getWords").then((response) => {
      setQuizions(response.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <LoadingPage />;
  } else {
    return (
      <div className="quizContainer">
        <h1>
          <KeyboardDoubleArrowRightTwoToneIcon /> Quick Quiz
        </h1>
        <div className="task-progress">
          <p>
            {index + 1} / 10
            <span>{(index + 1) * 10}%</span>
          </p>
          <progress
            className="progress progress1"
            max="100"
            value={(index + 1) * 10}
          ></progress>
        </div>
        <Question
          key={quizions[index]?.id}
          word={quizions[index]?.word}
          pos={quizions[index]?.pos}
        />
      </div>
    );
  }
};

export default Quiz;
