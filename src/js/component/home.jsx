import React, { useState } from "react";


//create your first component
const Home = () => {
	const [color, setColor] = useState("")
	const randomLight = () => {
		if(color === "red"){
			setColor("yellow")
		}
		else if(color === "yellow"){
			setColor("green")
		}
		else {
			setColor("red")
		}

		/* switch (color) {
		  case "red":
			setColor("green");
			break;
		  case "yellow":
			setColor("red");
			break;
		  case "green":
			setColor("yellow");
			break;
		  default:
			setColor("red");
		} */
	  };
	  
	  

	  return (
		<div className="text-center">
		  <div className="containerLight">
			<div
			  className={color === "red" ? "red light" : "red"}
			  onClick={() => setColor("red")}
			></div>
			<div
			  className={color === "yellow" ? "orange light" : "orange"}
			  onClick={() => setColor("yellow")}
			></div>
			<div
			  className={color === "green" ? "green light" : "green"}
			  onClick={() => setColor("green")}
			></div>
		  </div>
		  <div>
			<button onClick={randomLight}>Cambiar luz</button>
		  </div>
		</div>
	  );
	  
};

export default Home;
