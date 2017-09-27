import React from "react"
import Card from "./card"
import shuffle from "shuffle-array"
//import Counter from "./counter"

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
		shuffle(doublePictures)
		return doublePictures.map (
			(photo) => ({
				src: photo,
				isFlipped: false
			}))
		}		

	render () {
		return (
		<div className="game">
		<h1 className="header"> Come and play a memory game with me!</h1>
		{this.state.cards.map((card) => (<Card src={card.src} />) )}
		</div>
		)

	}

	}


/*const Game = () => (
	<div className="game">
		<h1 className="header"> Play a memory game with me!</h1>
		<Card src="/images/Budapest1.jpg" alt="" />
		<Card src="/images/Budapest2.jpg" alt="" />
		<Card src="/images/Budapest3.jpg" alt="" />
		<Card src="/images/Budapest4.jpg" alt="" />
		<Card src="/images/Budapest5.jpg" alt="" />
		<Card src="/images/Budapest6.jpg" alt="" />
		<Card src="/images/Budapest1.jpg" alt="" />
		<Card src="/images/Budapest2.jpg" alt="" />
		<Card src="/images/Budapest3.jpg" alt="" />
		<Card src="/images/Budapest4.jpg" alt="" />
		<Card src="/images/Budapest5.jpg" alt="" />
		<Card src="/images/Budapest6.jpg" alt="" />
		<Card src="/images/backside1.png" alt="" />

	</div>
)*/

export default Game