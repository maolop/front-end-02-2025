function Signup() {
	return (
		<>
			<h1>Sign Up</h1>

			<div style={{ marginRight: "45%", textAlign: "right" }}>
				<div>
					<label>Username:</label>
					<input type="text" />
				</div>
				<div>
					<label>E-mail:</label>
					<input type="text" />
				</div>
				<div>
					<label>Password:</label>
					<input type="password" />
				</div>
				<div>
					<label>I want to receive spam e-mail:</label>
					<input type="checkbox" />
				</div>
			</div>
			<button>Sign up</button>
		</>
	);
}

export default Signup;
