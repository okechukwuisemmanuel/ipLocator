import Form from "./form";
import classes from "../sass/header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.flow}>
        <h1>iplocator</h1>
        <p>
          find your ip address location in a second with google map, you can
          zoom in for more detail , just try it you might be suprised what you
          find
        </p>
      </div>
      <Form className={classes.form} />
    </header>
  );
};

export default Header;
