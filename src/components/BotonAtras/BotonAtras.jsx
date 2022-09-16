import React from 'react'
import { Link } from 'react-router-dom'
import "./BotonAtras.css"

export const BotonAtras = ({url}) => {

  return (
    // <div className='wrapperLink'>
    <Link className="" to={`${url}`} ><img src="../../images/flecha-curva.png" alt="Flecha volver" className='imagen-flecha'/><span>Volver Atrás</span></Link>
    // </div>
  )
}
