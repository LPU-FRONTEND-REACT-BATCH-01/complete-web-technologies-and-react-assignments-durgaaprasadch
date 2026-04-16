type Product = {
  id: number
  title: string
  price: number
  category: string
};

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products;
}

(async () => {
  const products = await fetchProducts()

  const under10 = products.filter(p => p.price <10)  
    console.log("under 10$ ",under10);

  const above10 = products.filter(p => p.price >10 )
  console.log("above 10$",above10);

   const nameAZ = [...products].sort((a, b) =>
    a.title.localeCompare(b.title)
  );
console.log("A-Z", nameAZ);

 
    const nameZA = [...products].sort((a, b) =>
    b.title.localeCompare(a.title)
  );
console.log("Z-A", nameZA);


   const byCategory = [...products].sort((a, b) =>
    a.category.localeCompare(b.category)
  );
console.log("By Category", byCategory);
})();