/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../ContextApi/StateProvider";
import { auth } from "../firebase";

function Header() {
	const [{ basket, user }] = useStateValue();

	const handleAuth = () => {
		if (user) {
			auth.signOut();
		}
	};

	return (
		<div className="header">
			<Link to="/">
				<img
					className="header__image"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
				/>
			</Link>
			<div className="header__search">
				<input className="header__searchInput" type="text" />
				<SearchIcon className="header__searchIcon" />
			</div>

			<div className="header__nav">
				<Link to={!user && "/login"}>
					<div className="header__option" onClick={handleAuth}>
						<span className="header__optionsTop">
							Hello {user ? user.email : "Buddy"}
						</span>
						<span className="header__optionBottom">
							{user ? "Sign out" : "Sign in"}
						</span>
					</div>
				</Link>
				<div className="header__option">
					<span className="header__optionsTop">Returns</span>
					<span className="header__optionBottom">& Orders</span>
				</div>
				<div className="header__option">
					<span className="header__optionsTop">Your</span>
					<span className="header__optionBottom">Prime</span>
				</div>
				<Link to="/checkout">
					<div className="header__optionBasket">
						<ShoppingBasketIcon />
						<span className="header__optionBottom header__basketCount">
							{basket?.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
