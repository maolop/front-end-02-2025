import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
	const { loggedInTrue } = useContext(AuthContext);
	const navigate = useNavigate();
	const [message, setMessage] = useState("");
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const url =
		"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBpltWZHTWgu1PeF2bWujzCXw6VZYcV16w";

	const login = () => {
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
					loggedInTrue();

					navigate("/admin");
				} else {
					console.log(json);
					setMessage("ei õnnestunud " + json.error.message);
				}
			});
	};

	// const login = () => {
	// 	loggedInTrue();
	// 	sessionStorage.setItem("token", "345hjkl2345jkhb234lkjb1234kj");
	// 	navigate("/admin");
	// };

	return (
		<>
			{message}
			<h1>Login</h1>

			<div style={{ marginRight: "45%", textAlign: "right" }}>
				<div>
					<label>Email:</label>
					<input type="text" ref={emailRef} />
				</div>
				<div>
					<label>Password:</label>
					<input type="password" ref={passwordRef} />
				</div>
			</div>
			<button onClick={login}>Log in</button>
		</>
	);
}

export default Login;
