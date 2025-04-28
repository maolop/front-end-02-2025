// import { CartProduct } from "../models/CartProduct";

function Payment(props: { sum: number }) {
	// const cart: CartProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");

	// const findTotal = () => {
	// 	let total = 0;
	// 	cart.forEach((cp) => (total += cp.product.price * cp.amount));
	// 	return total.toFixed(2);
	// };

	const pay = () => {
		const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
		const payload = {
			account_name: "EUR3D1",
			nonce: "1657da" + Math.random() * 9999999 + new Date(),
			timestamp: new Date(),
			amount: props.sum,
			order_reference: Math.random() * 9999999,
			customer_url: "https://err.ee",
			api_username: "92ddcfab96e34a5f",
		};
		const paymentHeaders = {
			Authorization: "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA==",
			"Content-Type": "application/json",
		};

		fetch(url, {
			method: "POST",
			body: JSON.stringify(payload),
			headers: paymentHeaders,
		})
			.then((res) => res.json())
			.then((json) => (window.location.href = json.payment_link));
	};

	return (
		<>
			<button onClick={pay}>Pay</button>
		</>
	);
}

export default Payment;
