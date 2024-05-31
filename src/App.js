import { HashRouter, Router, Routes, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./routers/Home";
import About from "./routers/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [searchResult, setSearchResult] = useState([]);

  return (
    <HashRouter>
      <Navbar setSearchResult={setSearchResult} />
      <Routes>
        <Link path={"/"} element={<Home searchResult={searchResult.results} />} />
        <Link path={"/about"} element={<About />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
