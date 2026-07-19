"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      image: product.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="product-box">
      <div className="box-inner h-100">
        <div className="product-header">
          <div className="inner-badge">
            {product.soldOut && (
              <span className="badge sold-out" style={{ backgroundColor: "var(--sold-out-label-bg-color)", color: "var(--sold-out-label-color)" }}>
                Sold Out
              </span>
            )}
          </div>

          <div className="product-image position-relative overflow-hidden">
            <Link href={`/products/${product.slug}`} className="d-block" aria-label="product">
              <div
                className="res-image"
                style={{ ["--aspect-ratio" as string]: "1.0", aspectRatio: "1 / 1", position: "relative" }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  width={1080}
                  height={1080}
                  loading="lazy"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Link>

            {(product.rating || product.reviews) && (
              <div className="stars_with_rating">
                {product.rating && (
                  <div className="cstm_review_bagde position-relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 11 12" fill="none">
                      <path
                        d="M5.04739 0.964187C5.22735 0.58081 5.77265 0.58081 5.95261 0.964188L7.24075 3.70828C7.31154 3.85907 7.45277 3.96471 7.61741 3.99001L10.5389 4.43903C10.941 4.50083 11.1049 4.99143 10.8207 5.28253L8.67637 7.47867C8.56546 7.59227 8.51508 7.75178 8.54064 7.90847L9.04222 10.9836C9.10941 11.3956 8.67206 11.7036 8.30678 11.5016L5.74196 10.0833C5.5914 10.0001 5.4086 10.0001 5.25804 10.0833L2.69322 11.5016C2.32794 11.7036 1.89059 11.3956 1.95778 10.9836L2.45936 7.90847C2.48492 7.75178 2.43454 7.59227 2.32363 7.47867L0.179347 5.28253C-0.104879 4.99143 0.0590191 4.50083 0.461143 4.43903L3.38259 3.99001C3.54723 3.96471 3.68846 3.85907 3.75925 3.70828L5.04739 0.964187Z"
                        fill="#FFAA52"
                      />
                    </svg>
                    {product.rating.toFixed(1)}
                  </div>
                )}
                {product.reviews && (
                  <div className="review_bagde_rating">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M16.7553 7.23554C16.5242 7.08042 16.3155 6.89432 16.1351 6.68245C16.1485 6.38747 16.2078 6.09638 16.3109 5.81966C16.5046 5.1638 16.7459 4.34754 16.2809 3.70883C15.8125 3.06504 14.9568 3.04342 14.2694 3.02586C13.9803 3.03741 13.691 3.00631 13.4109 2.93356C13.2569 2.69198 13.1393 2.42903 13.0619 2.15318C12.8325 1.49997 12.5468 0.68696 11.7816 0.43829C11.0391 0.196971 10.3727 0.655455 9.78519 1.05864C9.54908 1.24716 9.28398 1.39619 9.00021 1.49994C8.71628 1.3963 8.45106 1.24726 8.2149 1.05864C7.62732 0.655101 6.9608 0.198064 6.21848 0.43829C5.45348 0.68696 5.16784 1.49955 4.93821 2.15291C4.86097 2.42739 4.74467 2.68934 4.59288 2.93072C4.31188 3.00569 4.02116 3.03767 3.73059 3.02559C3.04322 3.04313 2.18757 3.06477 1.7192 3.70853C1.25419 4.3476 1.49545 5.16386 1.6892 5.81978C1.79107 6.09502 1.85088 6.38404 1.86662 6.67711C1.68699 6.89198 1.47753 7.08004 1.24462 7.23557C0.69 7.65853 0 8.18511 0 8.99994C0 9.81478 0.69 10.3414 1.24474 10.7643C1.47579 10.9195 1.68447 11.1056 1.86491 11.3174C1.85151 11.6124 1.79221 11.9035 1.68914 12.1802C1.49542 12.8361 1.25413 13.6524 1.71914 14.2911C2.18752 14.9348 3.04316 14.9565 3.73056 14.9741C4.01973 14.9625 4.30902 14.9936 4.58913 15.0664C4.74314 15.3079 4.86073 15.5709 4.93813 15.8467C5.16775 16.5001 5.45339 17.313 6.21856 17.5617C6.35414 17.6061 6.49591 17.6288 6.63858 17.6287C7.21446 17.6287 7.74032 17.2673 8.21496 16.9414C8.45107 16.7528 8.71618 16.6037 8.99997 16.4999C9.28391 16.6036 9.54914 16.7526 9.78534 16.9412C10.3729 17.3448 11.0392 17.8015 11.7817 17.5616C12.5467 17.3129 12.8324 16.5003 13.062 15.847C13.1392 15.5725 13.2555 15.3105 13.4073 15.0692C13.6883 14.9942 13.979 14.9622 14.2696 14.9743C14.957 14.9568 15.8126 14.9351 16.281 14.2914C16.746 13.6523 16.5048 12.836 16.311 12.1801C16.2091 11.9049 16.1493 11.6158 16.1336 11.3228C16.3132 11.1079 16.5227 10.9198 16.7556 10.7643C17.31 10.3414 18 9.81478 18 8.99994C18 8.18511 17.31 7.65853 16.7553 7.23554ZM12.3428 7.65523L8.59277 11.4052C8.29999 11.6981 7.82524 11.6982 7.53237 11.4054L7.53219 11.4052L5.65718 9.53021C5.36059 9.24105 5.35457 8.76621 5.64372 8.46962C5.93287 8.17303 6.40771 8.16701 6.7043 8.45616C6.70885 8.46059 6.71334 8.46507 6.71776 8.46962L8.06248 9.81437L11.2822 6.59461C11.5714 6.29802 12.0462 6.29203 12.3428 6.58118C12.6394 6.87033 12.6454 7.34517 12.3562 7.64176C12.3518 7.64634 12.3473 7.6508 12.3428 7.65523Z"
                        fill="#5D996E"
                      />
                    </svg>
                    {product.reviews}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="product-footer">
          <Link href={`/products/${product.slug}`} className="product-title alt-font" aria-label="product">
            {product.title}
          </Link>
          {product.subtitle && <div className="product-dec">{product.subtitle}</div>}

          <div className="price-box justify-content-center alt-font">
            <div className="price-wrapper">
              <span className="price-item special-price shop-minimalist">
                <span className="price">₹ {product.price}</span>
              </span>
              {product.compareAtPrice && (
                <span className="price-item old-price">
                  <span className="price">
                    <s>₹ {product.compareAtPrice}</s>
                  </span>
                </span>
              )}
              {product.discountLabel && (
                <div className="badge-wrap d-flex align-items-start alt-font">
                  <span className="badge discount" aria-hidden="true">
                    {product.discountLabel}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="product-buttons-wrap alt-font">
          {product.soldOut ? (
            <button type="button" disabled>
              <span className="btn-text">Sold out</span>
            </button>
          ) : (
            <motion.button 
              type="button" 
              onClick={handleAdd} 
              aria-label="add to cart"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="btn-text" data-text="Add to cart">
                {added ? "Added ✓" : "Add to cart"}
              </span>
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}
