import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./routers/Home";
import About from "./routers/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [searchResult, setSearchResult] = useState([]);

  return (
    <Router>
      <Navbar setSearchResult={setSearchResult} />
      <Routes>
        <Route exact path={"/"} element={<Home searchResult={searchResult.results} />} />
        <Route exact path={"/about"} element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
