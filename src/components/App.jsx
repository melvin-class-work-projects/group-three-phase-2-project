import "../stylesheet/App.css";
import Navbar from "./Navbar";
import Players from "./Players";
import Player from "./Player";
import { Routes, Route } from "react-router-dom";
import About from './About';

function App() {
  return (
    <>
      
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Players />} />
        <Route exact path="/players/:id" element={<Player />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
