function Login() {
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
			<button>Log in</button>
		</>
	);
}

export default Login;
