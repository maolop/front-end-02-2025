import { createContext, ReactNode, useState } from "react";
import { CartProduct } from "../models/CartProduct";

export const CartSumContext = createContext({
	cartSum: 0,
	setCartSum: (n: number) => console.log(n),
});

export const CartSumContextProvider = ({ children }: { children: ReactNode }) => {
	const [cartSum, setCartSum] = useState(findTotal());

	function findTotal() {
		const cart: CartProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");

		let total = 0;
		cart.forEach((e) => (total += e.product.price * e.amount));
		return total;
	}

	return <CartSumContext.Provider value={{ cartSum, setCartSum }}>{children}</CartSumContext.Provider>;
};
