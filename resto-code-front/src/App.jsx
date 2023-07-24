//import { useState } from 'react'
import ReservContext from "./Context/ReservasContext";
import UsersContext from "./Context/UsersContext";
import Administracion from "./Pages/Administracion";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {
  return (
    <UsersContext>
      <ReservContext>
        <Administracion/>
      </ReservContext>
    </UsersContext>
  );
}

export default App;