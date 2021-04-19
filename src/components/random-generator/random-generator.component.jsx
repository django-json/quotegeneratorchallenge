import React from "react";

import "./random-generator.styles.css";

const RandomGenerator = ({ handleClick }) => (
	<div className="random-generator">
		<p>random</p>
		<i className="material-icons" onClick={handleClick}>
			autorenew
		</i>
	</div>
);

export default RandomGenerator;

RandomGenerator.defaultProps = {
	handleClick: () => {},
};
