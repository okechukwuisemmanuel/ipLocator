import { FaSearch } from "react-icons/fa";
import { useState } from "react";
const Form = (props: { className: string }) => {
  const [input, setInput] = useState({ inputValue: "" });

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  return (
    <form method="get" className={props.className}>
      <label htmlFor="inputValue"></label>
      <input
        type="text"
        required
        id="inputValue"
        placeholder="192.168.182"
        min={13}
        minLength={13}
        value={input.inputValue}
        onChange={handleClick}
      />
      <FaSearch />
    </form>
  );
};

export default Form;
