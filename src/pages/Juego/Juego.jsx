import { useState, useEffect, useMemo } from "react"

import { GameCard } from "../../components/GameCard"
import { getCards, shuffle } from "../../utils/card-game"

import "./Juego.css"

export const Juego = () => {
  const [cards, setCards] = useState([])
  const [activeCards, setActiveCards] = useState([])
  const [flippedCards, setFlippedCards] = useState([])
  const [gameIsFinished, setGameIsFinished] = useState(false)
  const [bestScore, setBestScore] = useState(
    localStorage.getItem("bestScore") ?? Infinity
  )
  const [turns, setTurns] = useState(0)
  const canFlipCards = useMemo(() => flippedCards.length < 2, [flippedCards])

  const restart = () => {
    setCards((prev) => shuffle(prev))
    setGameIsFinished(false)
    setTurns(0)
  }

  const resetFlippedCards = () => setFlippedCards([])
  const deactivateCards = (card1, card2) =>
    setActiveCards((prev) => {
      prev[card1.index] = false
      prev[card2.index] = false
      return [...prev]
    })

  useEffect(() => {
    getCards().then((cards) => setCards(shuffle(cards)))
  }, [])

  useEffect(() => {
    if (activeCards.length === 0) return
    if (activeCards.some((card) => card)) return
    setGameIsFinished(true)
  }, [activeCards])

  useEffect(() => {
    if (!gameIsFinished) return
    const best = Math.min(bestScore, turns)
    localStorage.setItem("bestScore", best)
    setBestScore(best)
  }, [gameIsFinished, turns, bestScore])

  useEffect(() => {
    setActiveCards(cards.map(() => true))
  }, [cards])

  useEffect(() => {
    if (canFlipCards) return
    const [card1, card2] = flippedCards

    const updateBoard = () => {
      const cardsMatch = card1.id === card2.id
      if (cardsMatch) deactivateCards(card1, card2)
      resetFlippedCards()
      setTurns((prev) => ++prev)
    }

    const timeoutId = setTimeout(updateBoard, 750)
    return () => clearTimeout(timeoutId)
  }, [flippedCards, canFlipCards])

  return (
    <div className="game-container">
      <div className="game-board">
        {cards.map(({ key, id, image }, index) => {
          if (!activeCards[index])
            return <div key={key} className="game-card" />

          const isFlipped = flippedCards.some((card) => card.index === index)
          const flip = () =>
            canFlipCards && !isFlipped
              ? setFlippedCards(flippedCards.concat({ index, id }))
              : null

          return (
            <GameCard
              key={key}
              image={image}
              isFlipped={isFlipped}
              flip={flip}
            />
          )
        })}
      </div>
      <div className="game-controls">
        <button className="btn-restart" onClick={restart}>
          Reiniciar
        </button>
        <span>Turnos: {turns}</span>
      </div>
      {gameIsFinished && (
        <div className="game-modal">
          <div className="game-modal-body">
            <span>Juego terminado</span>
            <span>Mejor marca: {bestScore}</span>
            <button className="btn-restart" onClick={restart}>Volver a jugar</button>
          </div>
        </div>
      )}
    </div>
  )
}
