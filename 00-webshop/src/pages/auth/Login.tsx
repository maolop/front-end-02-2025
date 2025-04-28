import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
	const { loggedInTrue } = useContext(AuthContext);
	const navigate = useNavigate();

	const login = () => {
		loggedInTrue();
		sessionStorage.setItem("token", "345hjkl2345jkhb234lkjb1234kj");
		navigate("/admin");
	};

	return (
		<>
			<h1>Login</h1>

			<div style={{ marginRight: "45%", textAlign: "right" }}>
				<div>
					<label>Username:</label>
					<input type="text" />
				</div>
				<div>
					<label>Password:</label>
					<input type="password" />
				</div>
			</div>
			<button onClick={login}>Log in</button>
		</>
	);
}

export default Login;
