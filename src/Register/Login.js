import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
					alt=""
				/>
			</Link>
			<div className="login__container">
				<h1>Sign in</h1>
				<form action="">
					<h5>E-mail</h5>
					<input type="email" />

					<h5>Password</h5>
					<input type="password" />

					<button className="login__signInButton">Go</button>
				</form>
				<p>By signing-in you agree to giva us all control of your life 😊</p>
				<button className="login__registerButton">Create your account</button>
			</div>
		</div>
	);
}

export default Login;
