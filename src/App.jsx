import "./App.css";
import Home from "./page/Home";
import Catalog from "./page/Catalog/Catalog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CamperDetails from "./page/Catalog/CamperDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/details/:id" element={<CamperDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
