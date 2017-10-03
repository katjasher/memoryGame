import React from "react"
import "./SuccessMessage.css"

class SuccessMessage extends React.Component {


	render() {	
		return <div className="successMessage">
		<br/>
		<h2>CONGRATULATIONS</h2>
		<p>You matched all the cards!</p>
		<p>Click on the button if you want to play another round</p> <br/>
		<button className="playAgain" onClick={this.props.resetTheGame}> Reset the game</button> <br/>
		<p></p>
		</div>
	}


}


export default SuccessMessage