import { useEffect, useRef, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { isAlpha, isEmail, isInt } from "validator";

function Employees() {
	const [employees, setEmployees] = useState([]);
	const [addEmployeeMsg, setAddEmployeeMsg] = useState("");

	const idRef = useRef();
	const emailRef = useRef();
	const nameRef = useRef();
	const avatarRef = useRef();

	useEffect(() => {
		fetch("https://reqres.in/api/users")
			.then((data) => data.json())
			.then((data) => setEmployees(data.data));
	}, []);

	const checkId = () => {
		if (idRef.current.value === "") {
			setAddEmployeeMsg("Please enter an ID!");
			return false;
		}

		if (!isInt(idRef.current.value)) {
			setAddEmployeeMsg("Please set ID to an integer!");
			return false;
		}

		if (
			employees.find((e) => e.id === Number(idRef.current.value)) !== undefined
		) {
			setAddEmployeeMsg("Please set ID to be unique!");
			return false;
		}

		return true;
	};

	const checkEmail = () => {
		if (!isEmail(emailRef.current.value)) {
			setAddEmployeeMsg("Please enter a valid email!");
			return false;
		}

		return true;
	};

	const checkName = () => {
		if (
			!nameRef.current.value.includes(" ") ||
			nameRef.current.value.length < 3
		) {
			setAddEmployeeMsg("Please enter full name!");
			return false;
		}

		if (!isAlpha(nameRef.current.value, "en-US", { ignore: " -" })) {
			setAddEmployeeMsg("Name can only contain letters!");
			return false;
		}

		return true;
	};

	const checkAvatar = () => {
		return true;
	};

	const addEmployee = () => {
		if (!checkId()) return;
		if (!checkName()) return;
		if (!checkEmail()) return;
		if (!checkAvatar()) return;

		const newEmployee = {
			id: Number(idRef.current.value),
			first_name: nameRef.current.value,
			last_name: nameRef.current.value,
			email: emailRef.current.value,
			avatar: avatarRef.current.value,
		};

		setEmployees(employees.concat(newEmployee));
		setAddEmployeeMsg("Employee added!");

		idRef.current.value = "";
		emailRef.current.value = "";
		nameRef.current.value = "";
		avatarRef.current.value = "";
	};

	const deleteEmployee = (id) => {
		const newEmployees = employees.filter((e) => e.id !== id);
		setEmployees(newEmployees);
		setAddEmployeeMsg("Employee deleted!");
	};

	return (
		<div>
			<div className="container">
				<h2 className="mb-4">Employees</h2>
				<Table className="table table-hover table-bordered table-sortable">
					<thead>
						<tr>
							<th scope="col">ID</th>
							<th scope="col">Name</th>
							<th scope="col">Email</th>
							<th scope="col">Avatar</th>
							<th scope="col">Actions</th>
						</tr>
					</thead>
					<tbody>
						{employees.map((e) => (
							<tr key={e.id}>
								<td className="employee-id">{e.id}</td>
								<td>
									{e.first_name} {e.last_name}
								</td>
								<td>{e.email}</td>
								<td>
									<img src={e.avatar} alt="" />
								</td>
								<td>
									<Button
										type="button"
										variant="danger"
										onClick={() => deleteEmployee(e.id)}
									>
										Delete
									</Button>
								</td>
							</tr>
						))}
						{addEmployeeMsg !== "" && (
							<tr>
								<td colSpan="4">{addEmployeeMsg}</td>
							</tr>
						)}

						<tr className="input-row">
							<td>
								<input
									type="text"
									placeholder="ID"
									className="form-control"
									ref={idRef}
								/>
							</td>

							<td>
								<input
									type="text"
									placeholder="Name"
									className="form-control"
									ref={nameRef}
								/>
							</td>

							<td>
								<input
									type="text"
									placeholder="Email"
									className="form-control"
									ref={emailRef}
								/>
							</td>

							<td>
								<input
									type="text"
									placeholder="Avatar"
									className="form-control"
									ref={avatarRef}
								/>
							</td>

							<td>
								<Button type="submit" variant="success" onClick={addEmployee}>
									Add
								</Button>
							</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	);
}

export default Employees;
