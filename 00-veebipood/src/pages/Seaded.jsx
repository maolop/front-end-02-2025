import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";

function Seaded() {
	const [keel, setKeel] = useState(localStorage.getItem("keel"));
	const aadressRef = useRef();
	const emailRef = useRef();
	const telefonRef = useRef();
	const { t, i18n } = useTranslation();

	if (keel === null) {
		setKeel("et");
		localStorage.setItem("keel", "et");
	}

	const sisestaAadress = () => {
		if (aadressRef.current.value === "")
			toast.error("Tühja aadressi ei saa sisestada!");
		else if (aadressRef.current.value.length < 4)
			toast.error("Aadress on liiga lühike!");
		else toast.success("Aadress sisestatud: " + aadressRef.current.value);
	};

	const sisestaEmail = () => {
		if (emailRef.current.value === "")
			toast.error("Tühja e-maili ei saa sisestada!");
		else if (emailRef.current.value.includes("@") === false)
			toast.error("E-mailis puudub '@'!");
		else toast.success("E-mail sisestatud: " + emailRef.current.value);
	};

	const sisestaTelefon = () => {
		if (telefonRef.current.value === "")
			toast.error("Tühja numbrit ei saa sisestada!");
		else if (telefonRef.current.value.startsWith("+372") === false)
			toast.error("Sisesta Eesti suunakood!");
		else toast.success("Telefon sisestatud: " + telefonRef.current.value);
	};

	const muudaKeelEst = () => {
		setKeel("et");
		localStorage.setItem("keel", "et");
		i18n.changeLanguage("et");
	};

	const muudaKeelEng = () => {
		setKeel("en");
		localStorage.setItem("keel", "en");
		i18n.changeLanguage("en");
	};

	const muudaKeelRus = () => {
		setKeel("ru");
		localStorage.setItem("keel", "ru");
		i18n.changeLanguage("ru");
	};

	const muudaKeelEsp = () => {
		setKeel("es");
		localStorage.setItem("keel", "es");
		i18n.changeLanguage("es");
	};

	return (
		<>
			<br />
			<label>{t("settings.aadress")}</label>
			<input ref={aadressRef} type="text" />
			<button onClick={sisestaAadress}>{t("button.insert")}</button>

			<br />
			<br />

			<label>{t("settings.email")}</label>
			<input ref={emailRef} type="text" />
			<button onClick={sisestaEmail}>{t("button.insert")}</button>

			<br />
			<br />

			<label>{t("settings.telephone")}</label>
			<input ref={telefonRef} type="text" />
			<button onClick={sisestaTelefon}>{t("button.insert")}</button>

			<br />
			<br />

			<div>Hetkel aktiivne keel: {keel}</div>
			<button
				className={keel === "et" ? "aktiivne-keel" : undefined}
				onClick={muudaKeelEst}
			>
				Eesti
			</button>
			<button
				className={keel === "en" ? "aktiivne-keel" : undefined}
				onClick={muudaKeelEng}
			>
				English
			</button>
			<button
				className={keel === "ru" ? "aktiivne-keel" : undefined}
				onClick={muudaKeelRus}
			>
				Pycckij
			</button>
			<button
				className={keel === "es" ? "aktiivne-keel" : undefined}
				onClick={muudaKeelEsp}
			>
				Espanol
			</button>

			{keel === "et" && (
				<>
					<div>Leht on eesti keeles</div>
				</>
			)}

			{keel === "en" && (
				<>
					<div>Page is in English</div>
				</>
			)}

			{keel === "ru" && (
				<>
					<div>Привет</div>
				</>
			)}

			{keel === "es" && (
				<>
					<div>Como esta</div>
				</>
			)}

			<br />

			{keel !== "et" && (
				<>
					<div>
						<i>Languages other than Estonian are not ready</i>
					</div>
				</>
			)}

			<ToastContainer position="top-right" autoClose={5000} theme="dark" />
		</>
	);
}

export default Seaded;
