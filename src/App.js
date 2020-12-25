import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout/Checkout";
import Login from "./Register/Login";

function App() {
	return (
		<BrowserRouter>
			<div className="app">
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
