import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beers from "./pages/Beers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import Beer from "./components/Beer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<Beers />} />
          <Route path="/randombeer" element={<RandomBeer />} />
          <Route path="/newbeer" element={<NewBeer />} />
          <Route path="/beers/:beerId" element={<Beer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
