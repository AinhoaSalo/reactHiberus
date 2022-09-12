import React from 'react'
import { Link } from 'react-router-dom'
import "./Tabla.css"

export const Tabla = ({ name, episode, id }) => {

    return (

        <tr>
            <th> {episode} </th>
            <td> {name} </td>
            <td><Link className="" to={`${id}`}> <button className='loader-button'> Mas Informacion</button> </Link></td>
        </tr>
    )
}
