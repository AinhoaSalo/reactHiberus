import React from 'react'
import cartaTrasera from './img/carta.png'
import { useState, useEffect } from 'react'
import { getPersonajes } from '../../services/commonService'
import './Juego.css'

export function Juego() {


    const [personajes, setPersonajes] = useState([])

    useEffect(() => {
        getPersonajes().then(results => {
            setPersonajes(results)

        })
    }, [])



    return (
        <>
            <div className='delanteraTrasera'>
                <div className='cartaTraseraJuego'>
                    <img className='imgCartaTrasera' src={cartaTrasera} alt="Carta Trasera" />
                </div>
                <div className='imgCartaDelantera'><p>hola</p></div>
            </div>
        </>
    )
}


