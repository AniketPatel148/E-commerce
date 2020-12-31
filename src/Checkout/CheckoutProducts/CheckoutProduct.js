import React from "react";
import { useStateValue } from "../../ContextApi/StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, image, title, rating, pricing }) {
	const [, dispatch] = useStateValue();

	function removeFromBasket() {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
	}
	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct__image" src={image} alt="" />
			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>
				<p className="checkoutProduct__pricing">
					<small>₹</small>
					<strong>{pricing}</strong>
				</p>
				<div className="checkoutProduct__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>🌟</p>
						))}
				</div>
				<button onClick={removeFromBasket}>Remove form basket</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
