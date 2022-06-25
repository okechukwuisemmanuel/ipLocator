import { FaSearch } from "react-icons/fa";
import { useState, useRef, useContext } from "react";
import InputContext from "../context/context";

const Form = (props: { className: string }) => {
  // context
  const { value, setValue } = useContext(InputContext);
  // input state
  const [input, setInput] = useState({ inputValue: value });
  // input ref
  const inputRef = useRef<HTMLInputElement>(null);
  // input onchange handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  // form onclick handler to focus input
  const handleClick = () => {
    inputRef?.current?.focus();
  };
  // form submit handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let v = value;
    console.log(v);
    setValue && setValue(input.inputValue);
    setInput({ inputValue: "" });
  };
  return (
    <form
      className={props.className}
      onClick={handleClick}
      onSubmit={handleSubmit}
    >
      <label htmlFor="inputValue"></label>
      <input
        name="inputValue"
        type="text"
        ref={inputRef}
        required
        id="inputValue"
        placeholder="192.168.182.14"
        min={6}
        minLength={6}
        value={input.inputValue}
        onChange={handleChange}
      />
      <FaSearch />
    </form>
  );
};

export default Form;
