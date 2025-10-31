import React from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

const ProductDisplay = (props) => {
  const { product } = props;
  const [selectedImage, setSelectedImage] = React.useState(product.image);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-list">
          <img
            src={product.image}
            alt=""
            onClick={() => handleImageClick(product.image)}
            className={selectedImage === product.image ? "active" : ""}
          />
          <img
            src={product.image}
            alt=""
            onClick={() => handleImageClick(product.image)}
            className={selectedImage === product.image ? "active" : ""}
          />
          <img
            src={product.image}
            alt=""
            onClick={() => handleImageClick(product.image)}
            className={selectedImage === product.image ? "active" : ""}
          />
          <img
            src={product.image}
            alt=""
            onClick={() => handleImageClick(product.image)}
            className={selectedImage === product.image ? "active" : ""}
          />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={selectedImage} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-display-star">
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_dull_icon} alt="Star" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-price">
          <div className="productdisplay-right-price-old">
            ${product.old_price || product.price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price || product.price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          A Lightweight, knitted fabric that is breathable and comfortable for
          all-day wear. Perfect for casual outings or lounging at home.
        </div>
        <div className="productdisplay-right-size">
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
        </div>
        <button> ADD TO CART </button>
        <p className="productdisplay-right-category">
          <span>Category:</span>Women, T-Shirt, Crop Top{" "}
        </p>
        <p className="productdisplay-right-category">
          <span>Tags:</span>Modern, Latest{" "}
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
