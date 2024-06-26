import "./Swiper.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { register } from "swiper/element/bundle";
import { priceAfterDiscount } from "../helper/discount";
import tooman from "../helper/tooman";

function Swiper(props) {
  const [prods, setProds] = useState([]);

  useEffect(function () {
    async function setdata() {
      const data = await props.data();

      setProds(data.slice(0, 15));
    }
    setdata();
  }, []);

  function discountCalculator(prod) {
    const newPrice = Math.round(
      (prod.price / 1000) * ((100 - prod.discount) / 100)
    );
    return newPrice * 1000;
  }

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
          <span>{props.name}</span>
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
              {prods.map((prod) => {
                return (
                  <swiper-slide class="swiper-slide" key={prod.src}>
                    <Link to={`Products/${prod.id}`}>
                      <li>
                        <img
                          className="image"
                          src={prod.imgSrc}
                          alt={prod.name}
                        />
                        <span className="price">
                          {tooman(
                            priceAfterDiscount(prod.price, prod.discount)
                          )}
                        </span>

                        {prod.discount !== null ? (
                          <span>
                            <span className="preprice">
                              {tooman(prod.price)}
                            </span>
                            <span className="badge">{prod.discount}%</span>
                          </span>
                        ) : (
                          ""
                        )}
                      </li>
                    </Link>
                  </swiper-slide>
                );
              })}
            </swiper-container>
          </>
        </ul>
      </div>
    </div>
  );
}

export default Swiper;
