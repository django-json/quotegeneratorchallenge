import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

import "./author-quotes.styles.css";

import List from "../../components/list/list.component";
import RandomGenerator from "../../components/random-generator/random-generator.component";

const AuthorQuotes = ({
	quoteAuthor,
	authorQuotes,
	getRandomQuote,
	history,
}) => {
	return (
		<Fragment>
			<RandomGenerator
				handleClick={() => {
					history.push("/");
					getRandomQuote();
				}}
			/>
			<article className="author-quotes">
				<h1 className="author-quotes__author">{quoteAuthor}</h1>
				<List items={authorQuotes} />
			</article>
		</Fragment>
	);
};

export default withRouter(AuthorQuotes);
