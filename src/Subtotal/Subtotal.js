import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketCost } from "../ContextApi/Reducer/Reducer";
import { useStateValue } from "../ContextApi/StateProvider";

import "./Subtotal.css";

function Subtotal() {
	const [{ basket }, dispatch] = useStateValue();

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({basket.length} items): <strong>{value}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" />
							This order contains a gift!!
						</small>
					</>
				)}
				decimalScale={2}
				value={getBasketCost(basket)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"₹"}
			/>
			<button>Proceed to checkout</button>
		</div>
	);
}

export default Subtotal;
