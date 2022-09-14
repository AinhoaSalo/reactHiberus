import { useState } from "react"
import "./GameCard.css"

const frontImg =
  "https://es.web.img3.acsta.net/pictures/18/10/31/17/34/2348073.jpg"

export const GameCard = (props) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const toggle = () => setIsFlipped(!isFlipped)

  return (
    <div className={`game-card ${isFlipped ? "flipped" : ""}`} onClick={toggle}>
      <div
        className="card-front"
        style={{ backgroundImage: `url(${frontImg})` }}
      ></div>
      <div className="card-back"></div>
    </div>
  )
}
