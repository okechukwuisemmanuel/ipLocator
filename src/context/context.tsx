import { createContext, useState } from "react";

// context type
interface ipAdressType {
  value: string;
  setValue: (e: string) => void;
  version: string;
  setVersion: (e: string) => void;
}
// context initial state
const initialState = {
  value: "",
  version: "unkown",
  setValue: (e: string) => e,
  setVersion: (e: string) => e,
};
// create and initialize context
const ipAddressContext = createContext<ipAdressType>(initialState);
// create provider
export function IpaddressProvider(props: { children: React.ReactNode }) {
  const [value, setValue] = useState({ ipValue: "" });
  const [version, setVersion] = useState({ ipVersion: "" });
  // set input values
  function handleValue(e: string) {
    setValue({ ipValue: e });
  }
  // set version values
  function handleVersion(e: string) {
    setVersion({ ipVersion: e });
  }
  return (
    <ipAddressContext.Provider
      value={{
        value: value.ipValue,
        setValue: handleValue,
        version: version.ipVersion,
        setVersion: handleVersion,
      }}
    >
      {props.children}
    </ipAddressContext.Provider>
  );
}

export default ipAddressContext;
