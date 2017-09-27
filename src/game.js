import React from "react"
import Card from "./card"
import shuffle from "shuffle-array"

const pictures = [
		"/images/Budapest1.jpg",
		"/images/Budapest2.jpg",
		"/images/Budapest3.jpg",
		"/images/Budapest4.jpg",
		"/images/Budapest5.jpg",
		"/images/Budapest6.jpg"
		/*"/images/backside1.png"*/

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
				exists: true,
				isFlipped: false 
			}))
	}

	// New function that will take one argument and logs it
	handleCardClick = (cardSrc) => {
			console.log(cardSrc)
	}

	// The whenCardClicked is now a prop in the Card component, so we can now refer to onClick as a prop within Card
	render () {
		return (
			<div>
			<h1 className="header"> Come and play a memory game with me!</h1>
			// <p> </p>
			{this.state.cards.map((card) => (<Card src={card.src} whenCardClicked = {this.handleCardClick} />) )}
			</div>
		)

	}

	}

export default Game