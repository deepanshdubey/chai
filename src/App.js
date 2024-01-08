import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Chai from "./components/Chai";
import Display from "./components/Display";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Chai />} />
          <Route exact path="/display" element={<Display />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
