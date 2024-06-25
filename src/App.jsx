import "./App.css";
import { Header } from "./views/Header";
import { Footer } from "./views/Footer";
import { Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home/Home.jsx";
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route exact path="/about" element={<Home />} />
        <Route exact path="/services" element={<Home />} />
        <Route exact path="/portfolio" element={<Home />} />
        <Route exact path="/blog" element={<Home />} />
        <Route exact path="/contact" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
