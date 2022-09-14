import { GameCard } from "../../components/GameCard"
import "./Juego.css"

export const Juego = () => {
  return (
    <div className="game-container">
      <div className="card-slot">
        <GameCard />
      </div>
      <div className="card-slot"></div>
      <div className="card-slot">
        <GameCard />
      </div>
      <div className="card-slot">
        <GameCard />
      </div>
      <div className="card-slot">
        <GameCard />
      </div>
      <div className="card-slot"></div>
    </div>
  )
}