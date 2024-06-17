//@ts-nocheck
import { register } from "swiper/element/bundle";

import "swiper/css/bundle";
import styles from "./Slider.module.css";
import Card from "../card/Card";
import sakura from "../../assets/images/marian-kroell.jpg";
import camera from "../../assets/images/marian-kroell-2.jpg";

register();

const Slider = () => {


  return (
    <section className={styles.sliderSection}>
      <swiper-container slides-per-view={3} space-between={50} navigation={true}
               navigation-next-el=".next"
               navigation-prev-el=".prev"
               >
        <swiper-slide>
          <Card
            categories={["Category"]}
            color="lightBlue"
            author="Adam Sandler"
            title="Solutions for people like you like people"
            imgSrc={sakura}
            description="How can we help your technology and services business develop a revenue engine based"
          />
        </swiper-slide>
        <swiper-slide>
          <Card
            categories={["Category", "Marketing"]}
            color="lightBlue"
            author="Adam Sandler"
            title="Solutions for people like you like people"
            imgSrc={camera}
            description="How can we help your technology and services business develop a revenue engine based"
          />
        </swiper-slide>
        <swiper-slide>
          <Card
            categories={["Category", "Marketing"]}
            color="darkBlue"
            author="Adam Sandler"
            title="Solutions for people like you like people"
            imgSrc={sakura}
            description="How can we help your technology and services business develop a revenue engine based"
          />
        </swiper-slide>
        <swiper-slide>
          <Card
            categories={["Category", "Marketing"]}
            color="lightBlue"
            author="Adam Sandler"
            title="Solutions for people like you like people"
            imgSrc={sakura}
            description="How can we help your technology and services business develop a revenue engine based"
          />
        </swiper-slide>
        <swiper-slide>
          <Card
            categories={["Category", "Marketing"]}
            color="lightBlue"
            author="Adam Sandler"
            title="Solutions for people like you like people"
            imgSrc={sakura}
            description="How can we help your technology and services business develop a revenue engine based"
          />
        </swiper-slide>
        <swiper-slide>
          <Card
            categories={["Category", "Marketing"]}
            color="lightBlue"
            author="Adam Sandler"
            title="Solutions for people like you like people"
            imgSrc={camera}
            description="How can we help your technology and services business develop a revenue engine based"
          />
        </swiper-slide>
        <swiper-slide>
          <Card
            categories={["Category", "Marketing"]}
            color="lightBlue"
            author="Adam Sandler"
            title="Solutions for people like you like people"
            imgSrc={sakura}
            description="How can we help your technology and services business develop a revenue engine based"
          />
        </swiper-slide>

      </swiper-container>
      <button className="prev">Prev</button>
      <button className="next">Next</button>
    </section>
  );
};

export default Slider;
