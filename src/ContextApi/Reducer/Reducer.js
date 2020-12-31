/* eslint-disable default-case */
import { useEffect } from "react";
export const initialState = {
	basket: [],
	user: null,
	purchaseHistory: [],
};

export const getBasketCost = (basket) => {
	return basket?.reduce((amount, item) => amount + item.pricing, 0);
	// console.log(basket?.reduce((amount, item) => amount + item.pricing, 0));
};

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_BASKET":
			console.log("executed");
			return {
				...state,
				basket: [...state.basket, action.item],
				purchaseHistory: [...state.purchaseHistory, action.item],
			};

		case "REMOVE_FROM_BASKET":
			const productIndex = state.basket.findIndex(
				(item) => item.id === action.id
			);

			let newBasket = [...state.basket];

			if (productIndex >= 0) {
				newBasket.splice(productIndex, 1);
			} else {
				console.warn("You Moron! there's no such product in your basket");
			}
			return {
				...state,
				basket: newBasket,
			};

		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		case "EMPTY_BASKET":
			return {
				...state,
				basket: [],
			};

		default:
			return state;
	}
};

export default reducer;
