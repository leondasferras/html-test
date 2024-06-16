import styles from "./CardSection.module.css";
import Card from "../card/Card";
import image from "../../assets/images/marian-kroell-2.jpg";

const CardsSection = () => {
  return (
    <section className={styles.cardSection}>
      <Card
        categories={['Category','Marketing']}
        color="lightBlue"
        author="Adam Sandler"
        title="Solutions for people like you like people"
        imgSrc={image}
        description="How can we help your technology and services business develop a revenue engine based"
      />
      <Card
        categories={['Category','Marketing']}
        color="lightBlue"
        author="Adam Sandler"
        title="Solutions for people like you like people"
        imgSrc={image}
        description="How can we help your technology and services business develop a revenue engine based"
      />
      <Card
        categories={['Category','Marketing']}
        color="darkBlue"
        author="Adam Sandler"
        title="Solutions for people like you like people"
        imgSrc={image}
        description="How can we help your technology and services business develop a revenue engine based"
      />
      <Card
        categories={['Category','Marketing']}
        color="lightBlue"
        author="Adam Sandler"
        title="Solutions for people like you like people"
        imgSrc={image}
        description="How can we help your technology and services business develop a revenue engine based"
      />
      <Card
        categories={['Category','Marketing']}
        color="lightBlue"
        author="Adam Sandler"
        title="Solutions for people like you like people"
        imgSrc={image}
        description="How can we help your technology and services business develop a revenue engine based"
      />
      <Card
        categories={['Category','Marketing']}
        color="lightBlue"
        author="Adam Sandler"
        title="Solutions for people like you like people"
        imgSrc={image}
        description="How can we help your technology and services business develop a revenue engine based"
      />

    </section>
  );
};

export default CardsSection;
