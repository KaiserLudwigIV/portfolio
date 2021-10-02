import React from "react";
import ReactDOM from "react-dom";
import ProfilePicture from "./content/profilePic.svg";

const App = () => {
	return (
		<div className="appContainer">
			<div className="welcomeCard">
				<img src={ProfilePicture} alt="Profile picture" />
				<span>
					<p>Portfolio of</p>
					<h1>Maximilian Heppner</h1>
				</span>
			</div>
			<div className="workInProgress">
				<p>Work in progress.</p>
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
