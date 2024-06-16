import { FC } from "react";
import Button from "../button/Button";
import styles from "./Card.module.css";

type TCard = {
  color: "darkBlue" | "lightBlue";
  categories: string[];
  imgSrc: string;
  author: string;
  title: string;
  description: string;
};

const Card: FC<TCard> = ({ color, author, title, imgSrc, description, categories }) => {
  return (
    <div className={styles.card}>
      <div
        className={`${styles.cardCategoriesSticker} ${
          color === "darkBlue"
            ? styles.cardCategoriesStickerColorDarkblue
            : styles.cardCategoriesStickerColorlightblue
        }`}
      >
        {categories.join(' | ').toUpperCase()}
      </div>
      <img className={styles.cardImg} src={imgSrc} alt="image" />
      <span
        className={`${styles.cardAuthor}  ${
          color === "darkBlue"
            ? styles.cardAuthorColorDarkblue
            : styles.cardAuthorColorLightblue
        }`}
      >
        {author}
      </span>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <Button color={color} title="Call to action"/>
    </div>
  );
};

export default Card;
