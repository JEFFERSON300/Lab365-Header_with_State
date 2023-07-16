import "./App.css";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/usuarios" element={<Card />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
