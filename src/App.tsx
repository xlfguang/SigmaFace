import "./App.css";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Index from "./pages";

function App() {
  return (
    <BrowserRouter>
      {/* <Particles /> */}
      <Routes>
        <Route path="/" element={<Index></Index>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
