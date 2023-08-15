import 'bootstrap/dist/css/bootstrap.min.css';
import UsersContext from "../src/Context/UsersContext"
import ReservasContext from "../src/Context/ReservasContext"
import Header from "../src/Components/HEADER/Header"
import Rutas from './Components/RUTAS/Rutas';
import Footer from "../src/Components/FOOTER/Footer"

function App() {

  

  return (
    <>
      <UsersContext>
        <ReservasContext>
            <Header />
            <Rutas />
            <Footer />
        </ReservasContext>
      </UsersContext>
    </>
  );
}

export default App;
