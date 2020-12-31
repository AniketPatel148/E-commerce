import React, { useEffect, useState } from "react";
import axios from "../Axios/Axios";
import CheckoutProduct from "../Checkout/CheckoutProducts/CheckoutProduct";
import { useStateValue } from "../ContextApi/StateProvider";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import "./Payment.css";
import CurrencyFormat from "react-currency-format";
import { getBasketCost } from "../ContextApi/Reducer/Reducer";

function Payment() {
	const [{ basket, user }, dispatch] = useStateValue();

	const stripe = useStripe();
	const elements = useElements();
	const history = useHistory();

	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);

	const [processing, setProcessing] = useState(false);
	const [succeeded, setSuceeded] = useState("");
	const [clientSecret, setClientSecret] = useState("");

	useEffect(() => {
		const getClientSecret = async () => {
			const response = await axios({
				method: "post",
				url: `/payments/create?total=${getBasketCost(basket) * 100}`,
			});
			setClientSecret(response.data.clientSecret);
		};

		getClientSecret();
	}, [basket]);

	console.log("Client secret is >>", clientSecret);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setProcessing(true);

		const payLoad = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			})
			.then(({ paymentIntent }) => {
				setSuceeded(true);
				setError(null);
				setProcessing(false);

				dispatch({
					type: "EMPTY_BASKET",
				});

				history.replace("/orders");
			});
	};

	const handleChange = (e) => {
		setDisabled(e.empty);
		setError(e.error ? e.error.message : "");
	};

	return (
		<div className="payment">
			<div className="payment__container">
				<h2>
					Checkout (<Link to="/chekout">{basket?.length} items</Link>)
				</h2>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery address</h3>
					</div>
					<div className="payment__address">
						<p>{user?.email}</p>
						<p>39, Sahdev bunglows</p>
						<p>Manipura-road, Vijapur</p>
					</div>
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Review items and delivery</h3>
					</div>
					<div className="payment__items">
						{basket.map((item) => {
							return (
								<CheckoutProduct
									id={item.id}
									title={item.title}
									pricing={item.pricing}
									image={item.image}
									rating={item.rating}
								/>
							);
						})}
					</div>
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Payment method</h3>
					</div>
					<div className="payment__details">
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />
							<div className="payment__priceCOntainer">
								<CurrencyFormat
									renderText={(value) => <h3>Order total: {value}</h3>}
									decimalScale={2}
									value={getBasketCost(basket)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"₹"}
								/>
								<button disabled={processing || disabled || succeeded}>
									{processing ? <p>processing</p> : "Buy now"}
								</button>
							</div>
							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
