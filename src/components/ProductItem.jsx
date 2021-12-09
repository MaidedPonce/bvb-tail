import React, { useContext } from "react";
import "../styles/ProductItem.scss";
import AppContext from "../context/AppContext";
import addToCartS from "@icons/addOld.png";

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };
  return (
    <div className="ProductItem">
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.name}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={addToCartS} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
