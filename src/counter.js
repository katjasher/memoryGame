import React from "react"
import "./counter.css"

	class Counter extends React.Component {

		changeClassOnGameOver = () => {
			if(this.props.status==="Finished"){
				return "finalScore"
			} else {
				return "score"
			}
		}

		render(){
			return(
				<div className={this.changeClassOnGameOver()}>
				Score: {this.props.score}
				</div>
				)
		}

	}
	export default Counter



	/*state = {
			count: 10
		}

		handleButtonClick1 = () => {
			this.setState({ count: this.state.count + 1})

		}

		handleButtonClick2 = () => {
			this.setState({count: this.state.count - 1})
		}

		render(){
			return(
				<div>
				Count: {this.state.count}
				<button onClick={this.handleButtonClick1}>Add!</button>
				<button onClick={this.handleButtonClick2}>Subtract!</button>
				</div>
				)
		}*/
