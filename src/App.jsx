import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CounterPage from "./pages/CounterPage";
import CardPage from "./pages/CardPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/counter" element={<CounterPage/>} />
        <Route path="/card" element={<CardPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
