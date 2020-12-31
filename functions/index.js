const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
	"sk_test_51I3J1iD9TiDu53XhdGGBNiJdMzzkEgNvoiupXVpGkG4P840VgfXVyBrebwrImooc2awQZWj6zd97RJTi5CfP2j6X00p9Fqw4YB"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
	res.status(200).send("Hello World");
});

app.post("/payments/create", async (req, res) => {
	const total = req.query.total;

	console.log("payment request recieved for amount >>>", total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total,
		currency: "inr",
	});

	res.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

exports.api = functions.https.onRequest(app);
