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



	render () {
		return (
		<div>
		<h1 className="header"> Come and play a memory game with me!</h1>
		{this.state.cards.map((card) => (<Card src={card.src} />) )}
		</div>
		)

	}

	}

export default Game