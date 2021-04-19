import React from "react";

import "./quote-item.styles.css";

const QuoteItem = ({ item }) => (
	<li className="quote-item">{item.quoteText}</li>
);

export default QuoteItem;

QuoteItem.defaultProps = {
	item:
		"“The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.”",
};
