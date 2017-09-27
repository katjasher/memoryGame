import React from "react"
import "./card.css"  //normal css, react injects it into the <head>

// Defining a "Card" component
// That component is inheriting fuctions from React.Component

class Card extends React.Component {
	// the function we call from onClick
	// Because it is in this class it has access to 'this', so that it can use 'this.props.src'
	handleClick = () => {
		console.log(this)
		// alert (this.props.src + " card was clicked")
	}

// render() is a required function
// React will invoke this function when it mounts the component
	
	render() { 
		//render function definition. NOT using the fat arrow
		//the render function needs to return JSX
		// JSX is basically HTML but you use components as well, for example when we render this card we use it 
		// in the Game component by using <Card />
		// Props become an object className ="foo" becomes {className: "foo"} on this.props
		return <div className="card" onClick={this.handleClick} >
		<img src={this.props.src} alt="" />
		</div>
	}

}


// to be able t use 'import Card from "./card' we need to export it
export default Card