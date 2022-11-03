import { Routes, Route } from "react-router-dom";
import AnalyzeMusic from "./pages/AnalyzeMusic.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="analyzeMusic" element={<AnalyzeMusic />} />
      </Routes>
    </div>
  );
}

export default App;
