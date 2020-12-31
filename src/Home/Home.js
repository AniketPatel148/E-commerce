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
						title="New Apple iPhone 12 Pro Max (256GB) - Pacific Blue"
						rating={4}
						pricing={1}
						image="https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_UY218_.jpg"
					/>
					<Product
						id="12"
						title="Aurion Skipping-Rope Jump Skipping Rope for Men, Women, Weight Loss, Kids, Girls, Children, Adult - Best in Fitness, Sports, Exercise, Workout"
						rating={3}
						pricing={5}
						image="https://images-na.ssl-images-amazon.com/images/I/61DteV3hXqL._SL1000_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="14"
						rating={4}
						pricing={2}
						title="Alienware New Alienware m17 R3 17.3 inch FHD Gaming Laptop (Luna Light) Intel Core i7-10750H 10th Gen, 16GB R4 RAM, 1TB SSD, Nvidia Geforce RTX 2070 8GB GDDR6, Windows 10"
						image="https://m.media-amazon.com/images/I/71hhY4ikVwL._AC_UL320_.jpg"
					/>
					<Product
						id="15"
						rating={5}
						pricing={1}
						title="Alienware 7.1 Gaming Headset 510H- Lunar Light (Gravity Grey) Colour, AW510H"
						image="https://m.media-amazon.com/images/I/712TaM-9wYL._AC_UL320_.jpg"
					/>
					<Product
						id="16"
						rating={3}
						pricing={1}
						title="Roll over image to zoom in Alienware Wired/Wireless Gaming Mouse AW610M: 16000 DPI Optical Sensor - 350 Hour Rechargeable Battery Life - 7 Buttons - 3-Zone Alienfx RGB Lighting"
						image="https://m.media-amazon.com/images/I/71u65w5IiEL._AC_UL320_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="17"
						rating={4}
						pricing={2}
						title='Asus ROG Swift PG27UQ 27" Gaming Monitor 4K UHD 144Hz DP HDMI G-SYNC HDR Aura Sync with Eye Care'
						image="https://m.media-amazon.com/images/I/71CMZZpwTWL._AC_UY218_.jpg"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
