import "./GameCard.css"

export const GameCard = ({ image, isFlipped, flip }) => {
  return (
    <div className={`game-card ${isFlipped ? "flipped" : ""}`} onClick={flip}>
      <div
        className="card-front"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="card-back"></div>
    </div>
  )
}
