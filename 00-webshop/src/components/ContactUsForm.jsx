import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
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
				}
			);
	};

	return (
		<form ref={form} onSubmit={sendEmail}>
			<label>Name</label>
			<input type="text" name="user_name" />
			<label>Email</label>
			<input type="email" name="user_email" />
			<br />
			<label>Message</label>
			<br />
			<textarea name="message" style={{ width: "500px", height: "100px" }} />
			<br /> <br />
			<input type="submit" value="Send" />
		</form>
	);
};

export default ContactUs;
