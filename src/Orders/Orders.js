import React, { useEffect, useState } from "react";
import { useStateValue } from "../ContextApi/StateProvider";
import { db } from "../firebase";
import Order from "./Order/Order";
import "./Orders.css";

function Orders() {
	const [{ user }] = useStateValue();
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		if (user) {
			db.collection("user")
				.doc(user?.uid)
				.collection("orders")
				.orderBy("timeStamp", "desc")
				.onSnapshot((snapShot) => {
					setOrders(
						snapShot.docs.map((doc) => ({
							id: doc.id,
							data: doc.data(),
						}))
					);
				});

			console.log(orders, user.uid, db.collection("user"));
		} else {
			setOrders([]);
		}
	}, [user]);

	return (
		<div className="orders">
			<h1>Your Orders</h1>
			<div className="orders__order">
				{orders?.map((order) => (
					<Order order={order} />
				))}
			</div>
		</div>
	);
}

export default Orders;
