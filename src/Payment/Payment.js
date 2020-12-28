import React from "react";
import CheckoutProduct from "../Checkout/CheckoutProducts/CheckoutProduct";
import { useStateValue } from "../ContextApi/StateProvider";
import { Link } from "react-router-dom";

import "./Payment.css";

function Payment() {
	const [{ basket, user }, dispatch] = useStateValue();

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
					<div className="payment__items"></div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
