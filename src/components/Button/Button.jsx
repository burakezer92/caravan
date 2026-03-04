import css from "./Button.module.css";

function Button(props) {
  return <button className={css.button}>{props.name}</button>;
}

export default Button;
