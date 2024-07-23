import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Category from "./components/Category";
import QuizPage from "./components/QuizPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/quiz" element={<QuizPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
