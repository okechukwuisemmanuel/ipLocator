import { createContext, useState } from "react";

// context type
interface InputType {
  value: string;
  setValue?: (e: string) => void;
}
// initial context state
const initialState = {
  value: "",
};
// create and initialize  context
const InputContext = createContext<InputType>(initialState);

// create and export provider
export function InputProvider(props: { children: React.ReactNode }) {
  const [value, setInputValue] = useState("");
  function setValue(e: string) {
    setInputValue(e);
  }
  return (
    <InputContext.Provider value={{ value, setValue }}>
      {props.children}
    </InputContext.Provider>
  );
}

export default InputContext;
