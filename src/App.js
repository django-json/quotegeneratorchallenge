import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import AuthorQuotes from "./pages/author-quotes/author-quotes.component";
import Footer from "./components/footer/footer.component";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top.component";
import WithSpinner from "./components/with-spinner/with-spinner.component";

const HomePageWithSpinner = WithSpinner(HomePage);
const AuthorQuotesWithSpinner = WithSpinner(AuthorQuotes);

class App extends Component {
	constructor() {
		super();

		this.state = {
			randomQuoteData: {},
			authorQuotes: [],
			isLoading: true,
		};

		this.getRandomQuote = this.getRandomQuote.bind(this);
		this.getAuthorQuotes = this.getAuthorQuotes.bind(this);
	}

	componentDidMount() {
		this.getRandomQuote();
	}

	getRandomQuote() {
		this.setState({ isLoading: true });
		fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
			.then((response) => response.json())
			.then((jsonData) =>
				this.setState({ randomQuoteData: jsonData.data[0] }, () =>
					this.setState({ isLoading: false })
				)
			)
			.catch((error) => console.log(error));
	}

	getAuthorQuotes() {
		const {
			randomQuoteData: { quoteAuthor },
		} = this.state;

		this.setState({ isLoading: true });
		fetch(
			`https://quote-garden.herokuapp.com/api/v3/quotes?author=${quoteAuthor}`
		)
			.then((response) => response.json())
			.then((jsonData) =>
				this.setState({ authorQuotes: jsonData.data }, () =>
					this.setState({ isLoading: false })
				)
			)
			.catch((error) => console.log(error));
	}

	render() {
		const { randomQuoteData, authorQuotes, isLoading } = this.state;
		return (
			<div className="App">
				<ScrollToTop>
					<Switch>
						<Route
							exact
							path="/"
							render={() => (
								<HomePageWithSpinner
									isLoading={isLoading}
									getAuthorQuotes={this.getAuthorQuotes}
									getRandomQuote={this.getRandomQuote}
									{...randomQuoteData}
								/>
							)}
						/>
						<Route
							path="/author-quotes"
							render={() =>
								authorQuotes.length === 0 && !isLoading ? (
									<Redirect to="/" />
								) : (
									<AuthorQuotesWithSpinner
										isLoading={isLoading}
										quoteAuthor={
											randomQuoteData.quoteAuthor
										}
										authorQuotes={authorQuotes}
										getRandomQuote={this.getRandomQuote}
									/>
								)
							}
						/>
						}
					</Switch>
					<Footer />
				</ScrollToTop>
			</div>
		);
	}
}

export default App;
