import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBpltWZHTWgu1PeF2bWujzCXw6VZYcV16w";
	const [message, setMessage] = useState("");
	const navigate = useNavigate();

	const signup = () => {
		const payload = {
			email: emailRef.current?.value,
			password: passwordRef.current?.value,
			returnSecureToken: true,
		};

		fetch(url, { method: "POST", body: JSON.stringify(payload), headers: { "Content-Type": "application/json" } })
			.then((res) => res.json())
			.then((json) => {
				if (json.idToken) {
					setMessage("");
					navigate("/login");
				} else {
					console.log(json);
					setMessage("ei õnnestunud " + json.error.message);
				}
			});
	};

	return (
		<>
			<div>{message}</div>
			<h1>Sign Up</h1>

			<div style={{ marginRight: "45%", textAlign: "right" }}>
				<div>
					<label>Username:</label>
					<input type="text" />
				</div>
				<div>
					<label>E-mail:</label>
					<input type="text" ref={emailRef} />
				</div>
				<div>
					<label>Password:</label>
					<input type="password" ref={passwordRef} />
				</div>
				<div>
					<label>I want to receive spam e-mail:</label>
					<input type="checkbox" />
				</div>
			</div>
			<button onClick={signup}>Sign up</button>
		</>
	);
}

export default Signup;
