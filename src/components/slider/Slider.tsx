//@ts-nocheck
import { register } from "swiper/element/bundle";
import "swiper/css/bundle";
import styles from "./Slider.module.css";
import Card from "../card/Card";
import sakura from "../../assets/images/marian-kroell.jpg";
import camera from "../../assets/images/marian-kroell-2.jpg";

register();

const breakpoints = 
  {
    1199: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 2,
    }
  }


const Slider = () => {
  return (
    <section className={styles.sliderSection}>
      <swiper-container
        slides-per-view={1}
        space-between={32}
        navigation={true}
        navigation-next-el=".next"
        navigation-prev-el=".prev"
        breakpoints= {JSON.stringify(breakpoints)}
      >
        <swiper-slide>
          <Card
            categories={["Category"]}
            color="lightBlue"
            author="Adam Sandler"
            title="Solutions for people like people like you you like people"
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
            title="Solutions for people like you people like you people"
            imgSrc={sakura}
            description="How can we help your technology and services business develop a revenue engine based"
          />
        </swiper-slide>
      </swiper-container>
      <div className={styles.sliderNav}>
        <div className={`prev ${styles.sliderNavBtn}`}></div>
        <div
          className={`next ${styles.sliderNavBtn} ${styles.sliderNavBtnModeNext}`}
        ></div>
      </div>
    </section>
  );
};

export default Slider;
