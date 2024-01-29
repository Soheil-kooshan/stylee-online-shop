import "./Slider.css";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
const slides = [
  {
    src: "src/assets/photos/slider/regal.jpg",
    alt: "regal",
  },
  {
    src: "src/assets/photos/slider/jeans.jpg",
    alt: "jeans",
  },
  {
    src: "src/assets/photos/slider/jacket.jpg",
    alt: "jackets",
  },
];

register();

const Slider = () => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: {
        clickable: true,
      },
      loop: true,
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },

      injectStyles: [
        `
        .swiper {
          width: 100%;
          height: 100%;
          margin-left: auto;
          margin-right: auto;
        }
        
        .swiper-slide {
          text-align: center;
          font-size: 18px;
          background: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .swiper-button-prev {  
          display: none;
          filter: drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.8));
          margin-right: 0.5rem;
          color: #fff;
         
        }        
        .swiper-button-next {
          display: none;
          margin-left: 0.5rem;
          filter: drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.8));      
          color: #fff;
        }       
        .swiper-pagination-bullet-active {
          background-color: #fff;
          filter: drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.8));   
        }
        @media screen and (min-width: 560px) {     
          .swiper-button-next,
          .swiper-button-prev {
            display: block;
          }
        }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);
  return (
    <swiper-container class="container" ref={swiperRef} init="false">
      <swiper-slide class="swiper-slide">
        <img src={slides[0].src} alt={slides[0].alt} />
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <img src={slides[1].src} alt={slides[1].alt} />
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <img src={slides[2].src} alt={slides[2].alt} />
      </swiper-slide>
    </swiper-container>
  );
};

export default Slider;
