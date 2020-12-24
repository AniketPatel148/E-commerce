import React from "react";

function CheckoutProduct({ image, title, rating, pricing }) {
	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct__image" src={image} alt="" />
			<div className="checkoutProduct__info"></div>
		</div>
	);
}

export default CheckoutProduct;
