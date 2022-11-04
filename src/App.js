import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Hotel from "./pages/Hotel";
import HotelList from "./pages/HotelList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<HotelList />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
