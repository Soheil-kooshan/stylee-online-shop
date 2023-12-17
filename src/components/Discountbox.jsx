import "./Discountbox.css";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
function Discountbox() {
  register();
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,

      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 3,
          spaceBetween: 10,
        },

        // when window width is >= 480px
        560: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        720: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
      },

      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },

      injectStyles: [
        `
        .swiper-button-prev {
         display:none;
         color:#111;
         filter: drop-shadow(0 0 3rem red);
          

        }
        .swiper-button-next {
          display:none;
          color:#111;
          filter: drop-shadow(0 0 3rem red);            
          
        }

        @media screen and (min-width: 560px) {

          .swiper-button-prev {
            display:block

          }
          .swiper-button-next{
            display:block;
            
          }
        }

      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);
  return (
    <div>
      <div className="box">
        <div className="label">
          <div className="line"></div>
          <span>تخفیف های ویژه</span>
          <div className="line"></div>
          <div />
        </div>
        <ul>
          <>
            <swiper-container
              class="swiper-container"
              ref={swiperRef}
              init="false"
            >
              <swiper-slide class="swiper-slide">
                <li>
                  <img
                    className="image"
                    src="src/assets/photos/clothes/jacket/3.webp"
                    alt="item"
                  />
                  <span className="price">1200000</span>
                  <span className="preprice">1300000</span>
                </li>
              </swiper-slide>
              <swiper-slide class="swiper-slide">
                <li>
                  <img
                    className="image"
                    src="src/assets/photos/clothes/jacket/3.webp"
                    alt="item"
                  />
                  <span className="price">1200000</span>
                  <span className="preprice">1300000</span>
                </li>
              </swiper-slide>
              <swiper-slide class="swiper-slide">
                <li>
                  <img
                    className="image"
                    src="src/assets/photos/clothes/jacket/3.webp"
                    alt="item"
                  />
                  <span className="price">1200000</span>
                  <span className="preprice">1300000</span>
                </li>
              </swiper-slide>
              <swiper-slide class="swiper-slide">
                <li>
                  <img
                    className="image"
                    src="src/assets/photos/clothes/jacket/3.webp"
                    alt="item"
                  />
                  <span className="price">1200000</span>
                  <span className="preprice">1300000</span>
                </li>
              </swiper-slide>
              <swiper-slide class="swiper-slide">
                <li>
                  <img
                    className="image"
                    src="src/assets/photos/clothes/jacket/3.webp"
                    alt="item"
                  />
                  <span className="price">1200000</span>
                  <span className="preprice">1300000</span>
                </li>
              </swiper-slide>
              <swiper-slide class="swiper-slide">
                <li>
                  <img
                    className="image"
                    src="src/assets/photos/clothes/jacket/3.webp"
                    alt="item"
                  />
                  <span className="price">1200000</span>
                  <span className="preprice">1300000</span>
                </li>
              </swiper-slide>
              <swiper-slide class="swiper-slide">
                <li>
                  <img
                    className="image"
                    src="src/assets/photos/clothes/jacket/3.webp"
                    alt="item"
                  />
                  <span className="price">1200000</span>
                  <span className="preprice">1300000</span>
                </li>
              </swiper-slide>
              <swiper-slide class="swiper-slide">
                <li>
                  <img
                    className="image"
                    src="src/assets/photos/clothes/jacket/3.webp"
                    alt="item"
                  />
                  <span className="price">1200000</span>
                  <span className="preprice">1300000</span>
                </li>
              </swiper-slide>
            </swiper-container>
          </>
        </ul>
      </div>
    </div>
  );
}

export default Discountbox;
{
  /* <li className={styles.item}>
<img
  className={styles.image}
  src="src\assets\photos\clothes\jacket\2.webp"
  alt="item"
/>
<span className={styles.price}>1200000</span>
<span className={styles.preprice}>1300000</span>
</li> */
}
