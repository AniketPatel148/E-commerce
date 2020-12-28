import React from "react";
import { useStateValue } from "../ContextApi/StateProvider";
import "./Product.css";

function Product({ id, title, pricing, rating, image }) {
	const [{}, dispatch] = useStateValue();

	const addToBasket = () => {
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id,
				title,
				pricing,
				rating,
				image,
			},
		});
	};
	return (
		<div className="product">
			<div className="product__info">
				<p> {title}</p>
				<div className="product__pricing">
					<small>₹</small>
					<strong>{pricing}</strong>
				</div>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>🌟</p>
						))}
				</div>
			</div>
			<img src={image} alt="" />
			<button onClick={addToBasket}>Add to basket!</button>
		</div>
	);
}

export default Product;
