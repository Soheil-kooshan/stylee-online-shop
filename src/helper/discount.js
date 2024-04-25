function priceAfterDiscount(price, discount) {
  const newPrice = Math.round((price / 1000) * ((100 - discount) / 100));
  return newPrice * 1000;
}

function discountCalc(price, discount) {
  const discountAmount = Math.round((price / 1000) * (discount / 100));
  return discountAmount * 1000;
}

export { priceAfterDiscount, discountCalc };
