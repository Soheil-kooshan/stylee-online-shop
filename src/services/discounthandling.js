import data from "./data";

async function discountProducts() {
  const allProducts = await data();
  const proArr = await allProducts[0].products;
  const discountProducts = proArr
    .filter((res) => res.discount)
    .sort((a, b) => {
      return b.discount - a.discount;
    });

  return discountProducts;
}

export default discountProducts;
// function discountCalculator(prod) {
//   const newPrice = Math.round(
//     (prod.price / 1000) * ((100 - prod.discount) / 100)
//   );

//   return newPrice * 1000;
// }

{
  /* <swiper-container
class="swiper-container"
ref={swiperRef}
init="false"
>
{prods.map((prod) => {
  return (
    <swiper-slide class="swiper-slide" key={prod.src}>
      <li>
        <img
          className="image"
          src={prod.imgSrc}
          alt={prod.name}
        />
        <span className="price">
          {discountCalculator(prod)} T
        </span>
        {prod.discount !== null ? (
          <span className="preprice">{prod.price}</span>
        ) : (
          ""
        )}
      </li>
    </swiper-slide>
  );
})}
</swiper-container> */
}
