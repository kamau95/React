{/*import React from "react";

const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 1500,
    description: "Ergonomic design with 2.4GHz connection",
    category: "Electronics",
    inStock: true,
    rating: 4.3,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Water Bottle",
    price: 500,
    description: "1L stainless steel, keeps drinks cold",
    category: "Accessories",
    inStock: false,
    rating: 3.9,
    imageUrl: "https://via.placeholder.com/150",
  },
];

function Product() {
  return (
    <>
      <h1>all products offered</h1>
      <ProductDetails products={products} />

      <h1>available stock</h1>
      <ProductInstock products={products} />
    </>
  );
}

function ProductDetails({ products }) {
  return (
    <ul>
      <>
        {products.map((product) => 
          <li key={product.id}>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </li>
        )}
      </>
    </ul>
  );
}

function ProductInstock({ products }) {
  return (
    <ul>
      <>
        {products.map((product) => {
          if (product.inStock === true) {
            return (
              <li key={product.id}>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.description}</p>
              </li>
            );
          }
          return null;
        })}
      </>
    </ul>
  );
}
export default Product;*/}
