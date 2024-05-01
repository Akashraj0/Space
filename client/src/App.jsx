import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Travel from "./pages/Travel";
import Discover from "./pages/Discover";
import Planet from "./pages/Planet";
import About from "./pages/About";
import Layout from "./pages/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/planet" element={<Planet />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
