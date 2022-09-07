import React from 'react'
import "../Card/Card.scss"
export const Card = () => {
    return (
        <div class="artboard">
            <div class="card">

                <div class="card__side card__side--back">
                    <div class="card__cover">
                        <h4 class="card__heading">
                            <span class="card__heading-span">Mas Información</span>
                        </h4>
                    </div>
                    <div class="card__details">
                       
                    </div>
                </div>

                <div class="card__side card__side--front">
                    <div class="card__theme">
                        <div class="card__theme-box">
                            <p class="card__title">Morty (sustituir variable name)</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
