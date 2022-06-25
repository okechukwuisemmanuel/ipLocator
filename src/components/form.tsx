import { FaSearch } from "react-icons/fa";
import { useRef, useContext, useState } from "react";
import { ipVersion, isIP } from "is-ip";

import ipAddressContext from "../context/context";

const Form = (props: { className: string }) => {
  // input ref
  const inputRef = useRef<HTMLInputElement>(null);
  // state
  const [input, setInput] = useState({ inputValue: "" });
  // context
  const { setValue, setVersion } = useContext(ipAddressContext);

  // form onclick handler to focus input
  const handleClick = () => {
    inputRef?.current?.focus();
  };
  //   on change handler
  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setInput((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  // form submit handler
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
    if (isIP(input.inputValue)) {
      setValue(input.inputValue);
      let type = ipVersion(input.inputValue);
      if (type) {
        setVersion("ipv" + type);
      } else {
        setVersion("unknown");
      }
    } else {
      alert("wrong ip address");
    }
  };

  return (
    <form
      className={props.className}
      onClick={handleClick}
      onSubmit={submitHandler}
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
        onChange={onChangeHandler}
      />
      <FaSearch />
    </form>
  );
};

export default Form;
