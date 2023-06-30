import { createContext, useReducer } from "react";
import quizRecucer from "./quizRecucer";

const initState = {
  score: 0,
  index: 0,
};

export const QuizContext = createContext(initState);

export const QuizContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizRecucer, initState);
  //actions
  function increaseIndx() {
    dispatch({ type: "INCREASE_INDEX" });
  }

  function setScore() {
    dispatch({ type: "SET_SCORE" });
  }

  function resetIndex(){
    dispatch({ type: "INCREASE_INDEX" });
  }

  return (
    <QuizContext.Provider
      value={{ 
        index: state.index, 
        score: state.score, 
        increaseIndx, 
        setScore,
        resetIndex }}>
      {children}
    </QuizContext.Provider>
  );
};
