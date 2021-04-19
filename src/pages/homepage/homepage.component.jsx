import React, { Fragment } from "react";

import "./homepage.styles.css";

import QuoteItem from "../../components/quote-item/quote-item.component";
import AuthorLink from "../../components/author-link/author-link.component";
import RandomGenerator from "../../components/random-generator/random-generator.component";

const HomePage = ({ quoteText, getAuthorQuotes, getRandomQuote, ...props }) => (
	<Fragment>
		<RandomGenerator handleClick={getRandomQuote} />
		<article className="homepage">
			<QuoteItem item={{ quoteText }} />
			<AuthorLink handleClick={getAuthorQuotes} {...props} />
		</article>
	</Fragment>
);

export default HomePage;

HomePage.defaultProps = {
	quoteText:
		"“The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.”",
};
