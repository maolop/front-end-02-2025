import { toast } from "react-toastify";

export const invalidField = (title, price) => {
	let invalid = false;

	if (title === "") {
		invalid = true;
		toast("Title is missing");
	}

	if (price === "") {
		invalid = true;
		toast("Price is missing");
	}

	return invalid;
};
