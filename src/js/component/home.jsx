import React, { useState } from "react";

const Home = () => {
	const [color, setColor] = useState("");

	const randomLight = () => {
		if (color === "red") {
		setColor("yellow");
		} else if (color === "yellow") {
		setColor("green");
		} else if (color === "green") {
		setColor("purple");
		} else if (color === "purple") {
		setColor("red");
		} else {
		setColor("red");
		}
	};

	const [purple, setPurple] = useState(false);

	const togglePurpleLight = () => {
    	setPurple(!purple);
	};

	return (
		<div className="container">
			<div className="stick"></div>
			<div className={`container-fluid container-light ${ purple ? "with-purple" : "" }`} >
			<div className={color === "red" ? "red red-light" : "red"} onClick={() => setColor("red")}></div>
			<div className={color === "yellow" ? "orange orange-light" : "orange"} onClick={() => setColor("yellow")}></div>
			<div className={color === "green" ? "green green-light" : "green"} onClick={() => setColor("green")}></div>
			{purple && (
				<div className={ color === "purple" ? "purple purple-light" : "purple" } onClick={() => setColor("purple")}></div>
			)}
			</div>
			<div className="container col-6 button-container pt-5">
				<button onClick={togglePurpleLight} className="btn btn-primary purple-button"> Luz morada </button>
				<button onClick={togglePurpleLight} className="btn btn-primary remove-purple-button"> Quitar Luz Morada </button>
				<button onClick={randomLight} className="btn btn-primary change-light-button"> Cambiar luz </button>
			</div>
		</div>
	);
};

export default Home;
