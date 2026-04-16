type Products = {
  id: number,
  title: string,
  price: number
};

let products: Products[] = [];

products.push({
  id: 1,
  title: "Watch",
  price: 445
});

products.push({
  id: 2,
  title: "Phone",
  price: 999
});

console.log(products);