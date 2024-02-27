import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import GlobalStyle from "./Fonts/Font.styled";
import Project from "./Project";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<h1>about</h1>} />
        <Route path="project" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
