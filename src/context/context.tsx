import { createContext, useState } from "react";

// context type
interface ipAdressType {
  value: string;
  setValue: (e: string) => void;
}
// context initial state
const initialState = {
  value: "",
  setValue: (e: string) => e,
};
// create and initialize context
const ipAddressContext = createContext<ipAdressType>(initialState);
// create provider
export function IpaddressProvider(props: { children: React.ReactNode }) {
  const [value, setValue] = useState({ ipValue: "8.8.8.8" });
  // set input values
  function handleValue(e: string) {
    setValue({ ipValue: e });
  }
  return (
    <ipAddressContext.Provider
      value={{
        value: value.ipValue,
        setValue: handleValue,
      }}
    >
      {props.children}
    </ipAddressContext.Provider>
  );
}

export default ipAddressContext;
