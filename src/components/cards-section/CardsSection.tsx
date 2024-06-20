import styles from "./CardSection.module.css";
import Card from "../card/Card";
import camera from "../../assets/images/marian-kroell-2.jpg";
import sakura from "../../assets/images/marian-kroell.jpg";

const CardsSection = () => {
  return (
    <section className={styles.cardSection}>
      <Card
        categories={['Category','Marketing']}
        color="lightBlue"
        author="Adam Sandler"
        title="Solutions for people like you ike people"
        imgSrc={camera}
        description="How can we help your technology and services businessnologys businessnologys businessnologys business develop a revenue engine based"
      />
      <Card
        categories={['Category','Marketing']}
        color="lightBlue"
        author="Adam Sandler"
        title="Solutions for people "
        imgSrc={camera}
        description="How can we help your technology and services business develop a revenue engine based"
      />
      <Card
        categories={['Category','Marketing']}
        color="darkBlue"
        author="Adam Sandler"
        title="Solutions for people like you like people"
        imgSrc={sakura}
        description="How can we help your technology and services businessnologys businessnologys business"
      {/* <Card
        categories={['Category','Marketing']}
        color="darkBlue"
        author="Adam Sandler"
        title="Solutions for people "
        imgSrc={sakura}
        description="How can we help your technology "
      />
      <Card
        categories={['Category','Marketing']}
        color="lightBlue"
        author="Adam Sandler"
        title="Solutions for people like you like people"
        imgSrc={sakura}
        description="H and services business develop a revenue engine based"
      /> */}
      <Card
        categories={['Category','Marketing']}
        color="lightBlue"
        author="Adam Sandler"
        title="Solutions for people like you like poplee like"
        imgSrc={camera}
        description="How can we help your technology and services businessnologys businessnologys businessnologys and service businessnology anessnology and services businessnology and services businessnology and services businessnology and services businessnology and services business develop a revenue engine based"
      />

    </section>
  );
};

export default CardsSection;
