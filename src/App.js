import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import Part1 from "./pages/Part1";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to="/Part1"></Link>
        <Routes>
          <Route index element={<Home/> } />
          <Route path="/Part1" element={<Part1/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
