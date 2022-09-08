import React from 'react'
import "../Card/Card.scss"
export const Card = () => {
    return (
        <div className="artboard">
            <div className="card">

                <div className="card__side card__side--back">
                    <div className="card__cover">
                        <h4 className="card__heading">
                            <span className="card__heading-span">Mas Información</span>
                        </h4>
                    </div>
                    <div className="card__details">
                       
                    </div>
                </div>

                <div className="card__side card__side--front">
                    <div className="card__theme">
                        <div className="card__theme-box">
                            <p className="card__title">Morty</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
