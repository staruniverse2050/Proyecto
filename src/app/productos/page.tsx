"use client"
import { useState, useEffect } from 'react';
import Nav from '../nav/page';
import styles from "./productos.module.css";

const Productos = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      if (response.ok) {
        const data = await response.json();
        setProducts(data.products);
      } else {
        console.error('Error fetching products:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Nav />
      <div className={styles.container}>
        <h1 className={styles.titleprincipal}>Nuestros productos</h1>
        <div className={styles.productList}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <img src={product.thumbnail} alt={product.title} className={styles.image} />
              <div className={styles.details}>
                <h2 className={styles.title}>{product.title}</h2>
                <p className={styles.description}>{product.description}</p>
                <div className={styles.additionalInfo}>
                  <p className={styles.price} ><a className={styles.titulopequeño}>Precio: </a>${product.price}</p>
                  <p className={styles.discount}><a className={styles.titulopequeño}>Descuento: </a>{product.discountPercentage}%</p>
                  <p className={styles.rating}><a className={styles.titulopequeño}>Rating:</a> {product.rating}</p>
                  <p className={styles.stock}><a className={styles.titulopequeño}>Stock:</a> {product.stock}</p>
                  <p className={styles.brand}><a className={styles.titulopequeño}>Marca:</a> {product.brand}</p>
                  <p className={styles.category}><a className={styles.titulopequeño}>Categoría:</a> {product.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Productos;
