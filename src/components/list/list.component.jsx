import React, { createElement } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./list.styles.css";

import QuoteItem from "../quote-item/quote-item.component";

const List = ({ items, itemRenderer, className, ...props }) => (
	<ul className={classNames("list", className)}>
		{items.map((item, index) => {
			// Set new props to the item renderer
			const newProps = Object.assign(
				{ key: index },
				{ item },
				{ ...props }
			);
			// Assign new props to the item renderer
			return createElement(itemRenderer, newProps);
		})}
	</ul>
);

export default List;

List.defaultProps = {
	items: [],
	itemRenderer: QuoteItem,
};

List.propTypes = {
	items: PropTypes.array,
	itemRenderer: PropTypes.func,
};
