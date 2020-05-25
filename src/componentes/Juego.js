import React, { useState } from 'react'
import Puntuacion from './Puntuacion'

export default function Juego({setJugar,nick}) {

    // Acumulo la puntuacion en el state
    const [puntuacion,setPuntuacion] = useState(0)
    // Para indicar cuando inicio la ronda
    const [ronda,setRonda] = useState(false)
    // Para indicar mi jugada
    const [miJugada,setMiJugada] = useState('')
    // Para indicar la jugada de la pc
    const [pcJugada,setPcJugada] = useState(null)    
    // Resultado de la ronda
    const [resultado,setResultado] = useState(false)
    const [colorResultado,setColorResultado] = useState(false)   
    const [mensajeResultado,setMensajeResultado] = useState(false)   

    const onClickRonda = (e) => {

        // Valido que la jugada sea la correcta
        if (e.target.name !== 'piedra' && e.target.name !== 'papel' && e.target.name !== 'tijera') {
            setRonda(false)
            return 
        }

        setMiJugada(e.target.name)

        switch (Math.floor(Math.random() * 3) + 1) {
            case 1:
                setPcJugada('piedra')
                if (e.target.name === 'piedra') {
                    setResultado(0)
                    setColorResultado('warning')
                    setMensajeResultado('Empate')
                } else if (e.target.name === 'papel') {
                    setResultado(1)
                    setColorResultado('success')
                    setMensajeResultado('Usted gana!')
                } else { 
                    setResultado(-1)
                    setColorResultado('danger')
                    setMensajeResultado('Usted pierde!')
                }
            break;

            case 2:
                setPcJugada('papel')
                if (e.target.name === 'papel') {
                    setResultado(0)
                    setColorResultado('warning')
                    setMensajeResultado('Empate')
                } else if (e.target.name === 'tijera') {
                    setResultado(1)
                    setColorResultado('success')
                    setMensajeResultado('Usted gana!')
                } else { 
                    setResultado(-1)
                    setColorResultado('danger')
                    setMensajeResultado('Usted pierde!')
                }
            break;

            case 3:
                setPcJugada('tijera')
                if (e.target.name === 'tijera') {
                    setResultado(0)
                    setColorResultado('warning')
                    setMensajeResultado('Empate')
                } else if (e.target.name === 'piedra') {
                    setResultado(1)
                    setColorResultado('success')
                    setMensajeResultado('Usted gana!')
                } else { 
                    setResultado(-1)
                    setColorResultado('danger')
                    setMensajeResultado('Usted pierde!')
                }
            break;
        
            default:
                break;
        }
        
        setRonda(true)

    }

    const onClickVolverJugar = async () => {
        await setMiJugada(null)
        await setPcJugada(null)
        setRonda(false)
    }

    return (
        <div>
            <h2>Bienvenido {nick}!</h2>
            <p>Selecciona tu jugada</p>

            <Puntuacion 
                resultado   = {resultado}
                puntuacion  = {puntuacion}
                setPuntuacion  = {setPuntuacion}
            />
    
            {
                !ronda
                ?
                    <div className='tablero'>
                        <div className='jugada piedra' >
                            <img onClick={onClickRonda} name='piedra' src='/img/piedra.png' alt='' title='piedra'/>
                        </div>
                        <div className='jugada papel' >
                            <img onClick={onClickRonda} name='papel' src='/img/papel.png' alt='' title='papel'/>
                        </div>
                        <div className='jugada tijera' >
                            <img onClick={onClickRonda} name='tijera' src='/img/tijera.png' alt='' title='tijera'/>
                        </div>
                    </div>
                :
                    <div className='ronda'>
                        <div className='mijugada' >
                            <img src={`/img/${miJugada}.png`} alt=''/>
                        </div>
                        <div className='pcjugada' >
                            <img src={`/img/${pcJugada}.png`} alt=''/>
                        </div>
                        {
                            colorResultado
                            ?
                                <div className={`alert alert-dismissible alert-${colorResultado}`}>
                                    <h4 className="alert-heading">{mensajeResultado}</h4>
                                </div>
                            :
                                null
                        }
                    </div>
            }

            <div className='d-flex justify-content-between'>
                <button onClick={onClickVolverJugar} className='btn btn-success mt-4'>
                    Volver a jugar
                </button>
                
                <button onClick={() => setJugar(false)} className='btn btn-danger mt-4'>
                    Reiniciar
                </button>
            </div>
        </div>
    )
}
