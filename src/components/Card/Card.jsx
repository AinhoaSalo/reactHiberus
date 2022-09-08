import React from 'react'
import { Link } from 'react-router-dom'
import "../Card/Card.scss"


export const Card = ({ name, id, image }) => {
    return (
        // console.log(id, name, image)
        <div className="artboard" >
            <div className="card"  >
            <Link className="btn btn-primary" to={`${id}`}>
                <div className="card__side card__side--back">
                    
                        <div className="card__cover">
                            <h4 className="card__heading">


                                <span className="card__heading-span">Mas Información</span>

                            </h4>
                        </div>
                        <div className="card__details">

                        </div>
                  
                </div>

                <div className="card__side card__side--front" style={{
                    backgroundImage: "url(" + `${image}` + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <div className="card__theme">
                        <div className="card__theme-box">
                            <p className="card__title">{name}</p>

                        </div>
                    </div>
                </div>
                </Link>
            </div>
        </div>


    )


}
