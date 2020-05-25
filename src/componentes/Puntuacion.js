import React, {useEffect} from 'react'

export default function Puntuacion({resultado,puntuacion,setPuntuacion}) {

    useEffect(() => {
        if (resultado !== false){
            setPuntuacion(parseInt(puntuacion)+parseInt(resultado))
        }
    }, [resultado])

    return (
        <div className='card border-success mb-3 mx-5'>
            <p className="puntos-numero">{puntuacion}</p> 
            <p className='puntos-palabra'>Puntos</p>
        </div>
    )
}
