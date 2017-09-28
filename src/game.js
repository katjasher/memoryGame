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
			(photo) => ({
				src: photo,
				id: uuidv4(),
				isFlipped: false,
				exists: true
			}))
	}

	// New function that will take one argument and logs it
	handleCardClick = (cardId) => {
			const newCardsState = this.state.cards.map((card) => {
				if (card.id===cardId){card.isFlipped=true}
				return card;
				}
			)
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
					isFlipped={card.isFlipped} 
					id={card.id} 
					whenCardClicked = {this.handleCardClick} />) )}
			</div>
		)

	}

	}

export default Game