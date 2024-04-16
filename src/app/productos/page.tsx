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
                  <p className={styles.price}>Precio: ${product.price}</p>
                  <p className={styles.discount}>Descuento: {product.discountPercentage}%</p>
                  <p className={styles.rating}>Rating: {product.rating}</p>
                  <p className={styles.stock}>Stock: {product.stock}</p>
                  <p className={styles.brand}>Marca: {product.brand}</p>
                  <p className={styles.category}>Categoría: {product.category}</p>
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
