import { useContext } from "react";
import { PhoneContext } from "../../context/phone-context";

export function Key() {
  const { handlerClickNumber, handlerDelete } = useContext(PhoneContext);

  return (
    <>
      <li>
        <button className="key" onClick={() => handlerClickNumber("1")}>
          1
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handlerClickNumber("2")}>
          2
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handlerClickNumber("3")}>
          3
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handlerClickNumber("4")}>
          4
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handlerClickNumber("5")}>
          5
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handlerClickNumber("6")}>
          6
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handlerClickNumber("7")}>
          7
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handlerClickNumber("8")}>
          8
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handlerClickNumber("9")}>
          9
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handlerClickNumber("0")}>
          0
        </button>
      </li>
      <li>
        <button className="key big" onClick={() => handlerDelete()}>
          delete
        </button>
      </li>
    </>
  );
}
