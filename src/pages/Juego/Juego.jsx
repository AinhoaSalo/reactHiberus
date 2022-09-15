import { useState, useEffect, useMemo } from "react"

import { GameCard } from "../../components/GameCard"
import { getCards, shuffle } from "../../utils/card-game"

import "./Juego.css"

export const Juego = () => {
  const [cards, setCards] = useState([])
  const [activeCards, setActiveCards] = useState([])
  const [flippedCards, setFlippedCards] = useState([])
  const canFlipCards = useMemo(() => flippedCards.length < 2, [flippedCards])

  const resetFlippedCards = () => setFlippedCards([])
  const deactivateCards = (card1, card2) =>
    setActiveCards((prev) => ({
      ...prev,
      [card1.index]: false,
      [card2.index]: false,
    }))

  useEffect(() => {
    getCards().then((cards) => setCards(shuffle(cards)))
  }, [])

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
    }

    const timeoutId = setTimeout(updateBoard, 750)
    return () => clearTimeout(timeoutId)
  }, [flippedCards, canFlipCards])

  return (
    <div className="game-container">
      {cards.map(({ key, id, image }, index) => {
        if (!activeCards[index]) return <div key={key} className="game-card" />

        const isFlipped = flippedCards.some((card) => card.index === index)
        const flip = () =>
          canFlipCards && !isFlipped
            ? setFlippedCards(flippedCards.concat({ index, id }))
            : null

        return (
          <GameCard key={key} image={image} isFlipped={isFlipped} flip={flip} />
        )
      })}
    </div>
  )
}
