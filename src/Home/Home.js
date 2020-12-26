/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Product from "../Product/Product";

import "./Home.css";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://m.media-amazon.com/images/G/31/AmazonVideo/2019/1102620_MLP_1440x675_apv189_V3._SY1200_FMJPG_.jpg"
				/>

				<div className="home__row">
					<Product
						id="11"
						title="Mast Headset"
						rating={5}
						pricing={55.69}
						image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
					/>
					<Product
						id="12"
						title="Thik Thaak Headset"
						rating={2}
						pricing={5.69}
						image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
					/>
				</div>
				<div className="home__row">
					<Product />
					<Product />
					<Product />
				</div>
				<div className="home__row">
					<Product />
				</div>
			</div>
		</div>
	);
}

export default Home;
