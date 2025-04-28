import { createContext, ReactNode, useState } from "react";

export const AuthContext = createContext({
	loggedIn: false,
	loggedInFalse: () => {},
	loggedInTrue: () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
	const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem("token") !== null);

	const loggedInFalse = () => {
		setLoggedIn(false);
	};

	const loggedInTrue = () => {
		setLoggedIn(true);
	};

	return <AuthContext.Provider value={{ loggedIn, loggedInFalse, loggedInTrue }}>{children}</AuthContext.Provider>;
};
