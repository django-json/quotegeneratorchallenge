import React from "react";
import { Link } from "react-router-dom";

import "./author-link.styles.css";

const AuthorLink = ({ quoteAuthor, quoteGenre, handleClick }) => (
	<Link to="/author-quotes" className="author-link" onClick={handleClick}>
		<div className="author-link__details">
			<h2 className="author-link__author">{quoteAuthor}</h2>
			<p className="author-link__genre">{quoteGenre}</p>
		</div>
		<i className="material-icons">arrow_right_alt</i>
	</Link>
);

export default AuthorLink;

AuthorLink.defaultProps = {
	quoteAuthor: "Bill Gates",
	quoteGenre: "business",
};
