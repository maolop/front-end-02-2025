import { useRef } from "react";
import kasutajadFailist from "../data/kasutajad.json";
import { ToastContainer, toast } from "react-toastify";

function Registreeru() {
  const emailRef = useRef();
  const pwRef = useRef();

  const registreeru = () => {
    const uusKasutaja = {
      email: emailRef.current.value,
      parool: pwRef.current.value,
    };

    kasutajadFailist.push(uusKasutaja);
    toast.success("Oled registreerunud");
  };

  return (
    <>
      <label>Email</label>
      <input ref={emailRef} type="text" />
      <label>Password</label>
      <input ref={pwRef} type="text" />
      <br />
      <button onClick={registreeru}>Registreeru</button>

      <ToastContainer position="top-right" autoClose={5000} theme="dark" />
    </>
  );
}

export default Registreeru;
