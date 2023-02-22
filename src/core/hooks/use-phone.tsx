import { useState } from "react";

export type UsePhoneStructure = ReturnType<typeof usePhone>;
export function usePhone() {
  const initialState: string = "";

  let [keyboard, setKeyboard] = useState(initialState);

  const handlerClickNumber = (number: string) => {
    setKeyboard(keyboard + number);
  };
  const handlerDelete = () => {
    setKeyboard((keyboard = ""));
  };

  return {
    keyboard,
    handlerClickNumber,
    handlerDelete,
  };
}
