import { Add } from "./pages/Add";
import { Edit } from "./pages/Edit";
import "./App.css";
import Movies from "./pages/Movies";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
