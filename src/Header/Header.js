/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

function Header() {
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
				<div className="header__option">
					<span className="header__optionsTop">Hello buddy!</span>
					<span className="header__optionBottom">Sign In</span>
				</div>
				<div className="header__option">
					<span className="header__optionsTop">Hello buddy!</span>
					<span className="header__optionBottom">Sign In</span>
				</div>
				<div className="header__option">
					<span className="header__optionsTop">Hello buddy!</span>
					<span className="header__optionBottom">Sign In</span>
				</div>
				<Link to="/checkout">
					<div className="header__optionBasket">
						<ShoppingBasketIcon />
						<span className="header__optionBottom header__basketCount">0</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
