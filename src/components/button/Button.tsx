import { FC } from "react";
import styles from "./Button.module.css";


type TButton = {
  color: string;
  title: string;
  size?: string;
};

const Button: FC<TButton> = ({ color, title, size }) => {
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
      }
        ${size === 'xl' ? styles.button_xl : '' }
      `}
    >
      {title}
    </button>
  );
};

export default Button;
