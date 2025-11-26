import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CounterPage from "./pages/CounterPage";
import CardPage from "./pages/CardPage";
import Layout from "./components/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path="counter" element={<CounterPage />} />
          <Route path="card" element={<CardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
