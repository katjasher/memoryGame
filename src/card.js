import React from "react"


const Card = (props) => (
	<div className="card">
		<img src={props.src} />
	</div>
)

const Card1 = (props) => (
	<div className="cardBack">
		<img src={props.src} />
	</div>
)


export default Card; Card1