import React from "react";
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.css";

function Checkout() {
	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					className="checkout__advertisement"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZBBtsqzdEBPX3qnLzR4gizYD4EGKzX2Zg&usqp=CAU"
					alt=""
				/>
				<div>
					<h2 className="checkout__title">Your Shopping Basket!</h2>
				</div>
			</div>
			<div className="checkout__right">
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
