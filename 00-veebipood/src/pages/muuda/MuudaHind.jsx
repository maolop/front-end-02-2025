import { useNavigate, useParams } from "react-router-dom";
import hinnadFailist from "../../data/hinnad.json";
import { useRef } from "react";

function MuudaHind() {
  const { index } = useParams();
  const hind = hinnadFailist[index];
  const hindRef = useRef();
  const lisajaRef = useRef();
  const navigate = useNavigate();

  const muudaHinda = () => {
    hinnadFailist[index].arv = Number(hindRef.current.value);
    hinnadFailist[index].lisaja = lisajaRef.current.value;
    navigate("/halda-hinnad");
  };

  return (
    <>
      <label>Hind:</label>
      <input type="text" ref={hindRef} defaultValue={hind.arv} />
      <br />
      <label>Lisaja:</label>
      <input type="text" ref={lisajaRef} defaultValue={hind.lisaja} />
      <br />
      <button onClick={muudaHinda}>Sisesta</button>
    </>
  );
}

export default MuudaHind;
