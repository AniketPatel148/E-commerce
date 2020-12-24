/* eslint-disable default-case */
export const initialState = {
	basket: [],
};

export const getBasketCost = (basket) => {
	return basket?.reduce((amount, item) => amount + item.pricing, 0);
	// console.log(basket?.reduce((amount, item) => amount + item.pricing, 0));
};

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_BASKET":
			return {
				...state,
				basket: [...state.basket, action.item],
			};

		default:
			return state;
	}
};

export default reducer;
