import { usePhone } from "../hooks/use-phone";
import { PhoneContext } from "./phone-context";

export function PhoneContextProvider({ children }: { children: JSX.Element }) {
  const context = usePhone();
  return (
    <PhoneContext.Provider value={context}>{children}</PhoneContext.Provider>
  );
}
