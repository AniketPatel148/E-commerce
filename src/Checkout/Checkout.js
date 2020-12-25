import React from "react";
import { useStateValue } from "../ContextApi/StateProvider";
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProducts/CheckoutProduct";

function Checkout() {
	const [{ basket }, dispatch] = useStateValue();
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

					{basket.map((item) => (
						<CheckoutProduct
							id={item.id}
							image={item.image}
							title={item.title}
							rating={item.rating}
							pricing={item.pricing}
						/>
					))}
				</div>
			</div>
			<div className="checkout__right">
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
