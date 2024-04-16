"use client"
import { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Nav from '../nav/page';
import styles from "./productos.module.css";
import Swal from 'sweetalert2';

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

  useEffect(() => {
    if (loading) {
      // Muestra la alerta de carga
      Swal.fire({
        title: 'Espere un momento, por favor',
        allowOutsideClick: false,
        showConfirmButton: false,
      });
      Swal.showLoading(); // Muestra el indicador de carga
    } else {
      // Cierra la alerta cuando los productos se cargan
      Swal.close();
    }
  }, [loading]);
  

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
                  <p className={styles.price}><a className={styles.titulopequeño}>Precio: </a>${product.price}</p>
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
      <footer className={styles.footer}>
        <div className={styles.content}>
          <p>@ 2024 Vacano Studio. Todos los derechos reservados.</p>
          <p>Contacto: info@vacanostudio.com</p>
          <p>Teléfono: +1234567890</p>
          <div className={styles.socialLinks}>
            <a href="https://facebook.com/vacanostudio" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className={styles.facebook} />
            </a>
            <a href="https://twitter.com/vacanostudio" target="_blank" rel="noopener noreferrer">
              <FaTwitter className={styles.twitter} />
            </a>
            <a href="https://instagram.com/vacanostudio" target="_blank" rel="noopener noreferrer">
              <FaInstagram className={styles.instagram} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Productos;
