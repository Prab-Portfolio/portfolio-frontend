import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import GlobalStyle from "./Fonts/Font.styled";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<h1>about</h1>} />
      </Routes>
    </>
  );
}

export default App;
