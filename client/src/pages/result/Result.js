import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import nagwaImg from "../../assets/images/nagwa.png";
import "./Result.css";
import { QuizContext } from "../../context/quiz";
import LoadingPage from "../../components/loading/Loading";
import axios from "axios";

const Result = () => {
  // Declaration
  let { score, resetIndex } = useContext(QuizContext);
  const [loading, setLoading] = useState(true);
  const [rank, setRank] = useState("0.0");
  console.log('score ',Math.round((score/10)*100));
  const options = {
    url: "http://localhost:8000/getRank",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: {
      score:Math.round((score/10)*100),
    },
  };
  useEffect(() => {
    setLoading(true);
    axios(options).then((response) => {
      setRank(response.data.rank);
      setLoading(false);
    });
  }, []);
  /**
   * handleTryAgain : handle get new quiz again.
   */
  const handleTryAgain = () => {
    resetIndex();
    window.location.href = "http://localhost:3000/quiz";
    // navigator("/quiz");
  };

  if (loading) {
    <LoadingPage />;
  } else {
    return (
      <div className="finalResult">
        <Card className="resultCard">
          <CardMedia
            component="img"
            height="140"
            image={nagwaImg}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Quiz Result
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Rank : {rank} %
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => handleTryAgain()}
              size="small"
              color="primary"
            >
              Try Again
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
};

export default Result;
