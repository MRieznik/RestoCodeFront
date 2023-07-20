import Home from "../../Pages/Home";
import { Routes, Route} from "react-router-dom"

const Rutas = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Rutas;
