import { useContext } from "react";
import ipAddressContext from "../context/context";
const Twest = () => {
  const { value, version } = useContext(ipAddressContext);
  return (
    <>
      <p>hello {value}</p>
      <p>hello {version}</p>
    </>
  );
};

export default Twest;
