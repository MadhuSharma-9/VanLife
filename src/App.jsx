import Home from "./Home";
import About from "./About";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css"
import Vans from "./Vans";
import Navbar from "./Navbar";
import VanDetails from "./VanDetails";


function App(){
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetails />} />
      </Routes>
    </Router>
  )
}


export default App;