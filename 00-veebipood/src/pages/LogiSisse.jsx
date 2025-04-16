import { useRef } from "react";
import kasutajadFailist from "../data/kasutajad.json";
import { ToastContainer, toast } from "react-toastify";

function LogiSisse() {
	const emailRef = useRef();
	const pwRef = useRef();

	const logiSisse = () => {
		const kasutaja = kasutajadFailist.find((i) => i.email === emailRef.current.value);

		if (kasutaja === undefined) {
			toast.error("Vale kasutaja");
			return;
		}

		if (kasutaja.parool !== pwRef.current.value) {
			toast.error("Vale parool");
			return;
		}

		toast.success("Oled sisse logitud");
	};

	return (
		<>
			<label>Email</label>
			<input ref={emailRef} type="text" />
			<label>Password</label>
			<input ref={pwRef} type="password" />
			<br />
			<button onClick={logiSisse}>Logi sisse</button>

			<ToastContainer position="top-right" autoClose={5000} theme="dark" />
		</>
	);
}

export default LogiSisse;
