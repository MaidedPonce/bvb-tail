import React from "react";
import ProductItem from "../components/ProductItem";
import "../styles/ProductList.scss";
import data from "../hooks/useGetProducts";

const ProductList = () => {
  const products = data;

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((item) => (
          <ProductItem product={item} key={products.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
