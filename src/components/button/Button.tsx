import { FC } from "react";
import styles from "./Button.module.css";


type TButton = {
  color: string;
  title: string;
};

const Button: FC<TButton> = ({ color, title }) => {
  return (
    <button
      className={`${styles.button} ${
        color === "darkBlue"
          ? styles.buttonColorDarkblue
          : color === "lightBlue"
          ? styles.buttonColorLightblue
          : color === "black"
          ? styles.btnColorBlack
          : null
      }`}
    >
      {title}
    </button>
  );
};

export default Button;
