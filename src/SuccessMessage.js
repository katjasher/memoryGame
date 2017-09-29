import React from "react"
import "./SuccessMessage.css"

class SuccessMessage extends React.Component {


	render() {	
		return <div className="successMessage">
		<p>CONGRATULATIONS</p> <br/>
		<p>You won the game!</p> <br/>
		<p><button className="playAgain"> Click here</button> if you want to play another round</p> <br/>
		</div>
	}


}


export default SuccessMessage