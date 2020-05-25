import React, { Fragment, useState } from 'react'

export default function Ingreso({setJugar,setNick,nick}) {
    // Validacion si existe un error en el nick (este vacio)
    const [errorNick,setErrorNick] = useState(false)

    // Capturo el valor ingresado por el usuario
    const onChangeNick = (e) => {
        setErrorNick(false)
        setNick(e.target.value)
    }

    // Si el nick esta vacio, muestro el error
    const onClickeNick = (e) => {
        if (!nick) {
            setErrorNick(true)
            return
        }
        setJugar(true)
    }

    return (
        <Fragment>
            <div className='form-group'>
                <h1>Bienvenido a piedra, papel o tijera!</h1>
                <p>Este juego esta desarrollado con React! Ingresa tu nick y comenza a jugar</p>
                <h4>Ingresa tu nick</h4>
                <input 
                    name='nick' 
                    onChange={onChangeNick} 
                    className={errorNick?'form-control is-invalid':'form-control'}
                />
                {
                    errorNick
                    ?   
                        <div className="invalid-feedback">El nick es requerido</div>
                    :
                        null
                }
            </div>
            <button onClick={onClickeNick} className='btn btn-success btn-block'>
                Comenzar
            </button>
        </Fragment>
    )
}
