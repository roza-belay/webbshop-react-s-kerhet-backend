import React from "react";
import { Link } from "react-router-dom";
import './ProductCard.css';
import imageMap from '../../assets/ImageMap';

const ProductCard = ({ product }) => {
  const productImage = imageMap[product.name] || '/placeholder.jpg';

  return (
    <article className="product-card">
      <div className="product-card-media">
        <img src={productImage} alt={product.name || "Product"} />
      </div>
      <div className="product-card-body">
        <p className="product-category">{product.category || "Fashion"}</p>
        <h3>{product.name}</h3>
        <p className="product-card-description">
          {product.description || "Portfolio product card with responsive layout."}
        </p>
        <div className="product-card-footer">
          <span>${product.price}</span>
          <Link to={`/products/${product._id}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
