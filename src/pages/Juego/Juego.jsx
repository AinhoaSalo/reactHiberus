import React from 'react'
import cartaTrasera from './img/carta.png'
import { useState, useEffect } from 'react'
import { getPersonajes } from '../../services/commonService'
import './Juego.css'

export function Juego() {


    useEffect(() => {
        for (let i = 0; i < 16; i++) {
            document.querySelector('.cartaTraseraJuego').innerHTML += `<img className='imgCartaTrasera' src=${cartaTrasera} alt="Carta Trasera" />`;
        }

    }, [])



    return (
        <>
            <section className='delanteraTrasera'>
                <div className='cartaTraseraJuego'></div>
                <div className='cartaDelanteraJuego'></div>
            </section>
        </>
    )
}


