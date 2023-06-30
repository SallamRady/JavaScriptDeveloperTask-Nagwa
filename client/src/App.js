import MainHeader from "./components/navbar/MainHeader";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Footer from "./components/footer/Footer";
import Quiz from "./pages/quiz/Quiz";
import Result from "./pages/result/Result";

function App() {
  return (
    <div>
      <MainHeader />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
