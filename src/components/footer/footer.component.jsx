import React from "react";

import "./footer.styles.css";

const Footer = () => (
	<footer className="footer">
		<p className="footer__wrapper">
			<span>created by </span>
			<a className="footer__author" href="https://github.com/django-json">
				django-json
			</a>
			<span> - </span>
			<a href="https://devchallenges.io">devChallenges.io</a>
		</p>
	</footer>
);

export default Footer;
