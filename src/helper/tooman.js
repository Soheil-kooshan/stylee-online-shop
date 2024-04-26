function tooman(price) {
  const str = price.toString();
  const reversed = str.split("").reverse();
  for (let i = 3; i < reversed.length; i += 4) {
    reversed.splice(i, 0, ",");
  }
  const res = reversed.reverse().join("").toString();
  return res.concat(" T");
}

export default tooman;
