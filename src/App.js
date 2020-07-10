import React, {Fragment, useState} from 'react';
import './App.css';
import "bootswatch/dist/lumen/bootstrap.min.css"; 
import Ingreso from './componentes/Ingreso';
import Juego from './componentes/Juego';

function App() {

  const [jugar, setJugar] = useState(false)
  const [nick, setNick] = useState('')
  
    //Fecha
    const date = new Date();
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img className='logo' src='/img/logo.png' alt='logo' />
      </nav>
      <div className='container p-3'>
        

        {
          !jugar
          ?
            <Ingreso 
              setJugar  = {setJugar}
              setNick  = {setNick}
              nick      = {nick}
            />
          :
            <Juego 
              setJugar  = {setJugar}
              nick      = {nick}
            />
        }
      </div>
      <footer>
          by <a className="link-footer" target="black" href="https://setentatreinta.online">lucassequeira.com</a> - Piedra papel o tijera - {date.getFullYear()}
      </footer>
    </Fragment>
  );
}

export default App;
