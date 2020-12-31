import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout/Checkout";
import Login from "./Register/Login";
import { useStateValue } from "./ContextApi/StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import Payment from "./Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders/Orders";

const promise = loadStripe(
	"pk_test_51I3J1iD9TiDu53XhHX7sNLq3a9PyU5wN9pmd7cGHftwsyDfmF5bchzsLkX6fhHp5RtpoAOwyxGpiJAH73drvCRi300BmPD8dEu"
);

function App() {
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			console.log("User is", user);

			if (user) {
				dispatch({
					type: "SET_USER",
					user,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);
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
					<Route path="/payment">
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					<Route path="/orders">
						<Header />
						<Orders />
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
