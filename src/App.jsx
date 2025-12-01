import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CardPage from "./pages/CardPage";
import Layout from "./components/layout";
import 'react-lazy-load-image-component/src/effects/blur.css';
import BasketPage from "./pages/BasketPage";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path="basket" element={<BasketPage />} />
          <Route path="card" element={<CardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
