import { useState } from "react";

function Loomad() {
  const [loomad, setLoomad] = useState([
    "pigs",
    "goats",
    "sheep",
    "cows",
    "chickens",
    "cats",
    "dogs",
  ]);

  return (
    <>
      {loomad.map((i) => (
        <div>
          <span>{i}</span>
          <span onClick={() => setLoomad(loomad.filter((j) => j !== i))}>
            {" "}
            [x]
          </span>
        </div>
      ))}

      {loomad.length > 0 && <div>Kuvan {loomad.length} looma.</div>}
      {loomad.length === 0 && <div>Loomasid ei ole enam!</div>}
    </>
  );
}

export default Loomad;
