import emailjs from "@emailjs/browser";
import { useRef } from "react";

export const Kontakteeru = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_9l2tw2m", "template_3pty27e", form.current, {
				publicKey: "dnICejQ1Orto-mUcT",
			})
			.then(
				() => {
					console.log("SUCCESS!");
				},
				(error) => {
					console.log("FAILED...", error.text);
				},
			);
	};

	return (
		<form ref={form} onSubmit={sendEmail}>
			<label>Name</label>
			<input type="text" name="user_name" />
			<label>Email</label>
			<input type="email" name="user_email" />
			<label>Message</label>
			<textarea name="message" />
			<input type="submit" value="Send" />
		</form>
	);
};
