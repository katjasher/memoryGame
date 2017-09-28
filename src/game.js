import React from "react"
import Card from "./card"
import shuffle from "shuffle-array"
import uuidv4 from "uuid/v4"

const pictures = [
	"/images/Budapest1.jpg",
	"/images/Budapest2.jpg",
	"/images/Budapest3.jpg",
	"/images/Budapest4.jpg",
	"/images/Budapest5.jpg",
	"/images/Budapest6.jpg"
]

class Game extends React.Component{
	
	constructor(props){
		super(props)
		this.state = {
			cards: this.setupGame()
	}

	}

	setupGame = () => {
		const doublePictures = pictures.concat(pictures)
		const shuffledPictures = shuffle(doublePictures)
		return shuffledPictures.map (
			(url) => ({
				src: url,
				id: uuidv4(),
				isFlipped: false,
				isMatched: false,
				exists: true
			}))
	}

	// New function will be called from the card component
	// because we have passed it as a prop (called whenCardClicked) when we render the card component.
	// To generate the new state we need to .map over the old state, and if the card we are mapping over
	// is the clicked card, we need to set its 'isFlipped' value to be true. Otherwise we don't need to
	// change the state for that card.
	// Finally we call 'this.setState' with the new array that we've built.

	handleCardClick = (clickedCardId) => {
			const newCardsState = this.state.cards.map((card) => {
				if (card.id===clickedCardId){card.isFlipped=true}
				return card;
				}
			)
			this.setState ({cards: newCardsState}, this.checkIfCardsMatch)
	}

	checkIfCardsMatch = () => {
		const flippedCards = this.state.cards.filter((clickedCard) => {
				return clickedCard.isFlipped

			})

		const newCardsState = this.state.cards.map((card) => {
			if(flippedCards.length===2){
				card.isFlipped=false
			}
			return card
		})

		this.setState ({cards: newCardsState})
	}


	// The whenCardClicked is now a prop in the Card component, so we can now refer to onClick as a prop within Card
	render () {
		return (
			<div>
			<h1 className="header"> Come and play a memory game with me!</h1>¢
			{this.state.cards.map((card) => 
				(<Card 
					src={card.src} 
					key={card.id}
					id={card.id}
					isFlipped={card.isFlipped}
					isMatched={card.isMatched}
					exists = {card.exists} 
					whenCardClicked = {this.handleCardClick} />) )}
			</div>
		)

	}

	}

export default Game