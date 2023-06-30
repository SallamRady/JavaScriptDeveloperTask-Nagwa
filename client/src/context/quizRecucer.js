const quizReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE_INDEX":
      return { ...state, index: state.index + 1 };
    case "RESET_INDEX":
      return { ...state,score:0, index: 0 };
    case "SET_SCORE":
      return { ...state, score: state.score + 1 };
    default:
      return state;
  }
};

export default quizReducer;
