import Home from "../../Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Rutas;
