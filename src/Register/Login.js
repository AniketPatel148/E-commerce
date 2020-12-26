import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import "./Login.css";
function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const history = useHistory();

	const signIn = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				if (auth) {
					history.push("/");
				}
			})
			.catch((err) => alert(err.message));
	};

	const register = (e) => {
		e.preventDefault();
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				if (auth) {
					history.push("/");
				}
			})
			.catch((err) => alert(err.message));
	};

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
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button
						className="login__signInButton"
						type="submit"
						onClick={signIn}
					>
						Lets go!
					</button>
				</form>
				<p>By signing-in you agree to giva us all control of your life 😊</p>
				<button className="login__registerButton" onClick={register}>
					Create your account
				</button>
			</div>
		</div>
	);
}

export default Login;
