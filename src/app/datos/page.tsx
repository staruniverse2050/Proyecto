"use client"
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Nav from '../nav/page';
import styles from './profile.module.css'; 

const datos = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Intenta obtener el token de localStorage
    const token = localStorage.getItem('token');

    // Si el token está presente, intenta cargar los datos del usuario
    if (token) {
      fetchUserData(token);
    } else {
      // Si no hay token, redirige al usuario a la página de inicio de sesión
      router.push('/login');
    }
  }, []);

  const fetchUserData = async (token: string) => {
    try {
      const response = await fetch('https://dummyjson.com/auth/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const userData = await response.json();
        setUserData(userData);
      } else {
        console.error('Error al obtener los datos del usuario:', response.statusText);
      }
    } catch (error) {
      console.error('Error de red al obtener los datos del usuario:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loading) {
      Swal.fire({
        title: 'Cargando...',
        html: 'Espere un momento mientras se cargan los datos del usuario.',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showConfirmButton: false,
      });
    } else {
      Swal.close();
    }
  }, [loading]);

  if (!userData) {
    return <div></div>;
  }

  return (
    <>
      <Nav />
      <div className={styles.profilecard}>
        <h1>Datos del Usuario</h1>
        <img src={userData.image} alt="Avatar" />
        <div className={styles.details}>
          <p>Nombre: {userData.firstName} {userData.lastName}</p>
          <p>Edad: {userData.age}</p>
          <p>Género: {userData.gender}</p>
          <p>Email: {userData.email}</p>
          <p>Teléfono: {userData.phone}</p>
        </div>
        <div className={styles.address}>
          <p>Dirección: {userData.address.address}, {userData.address.city}, {userData.address.state}, {userData.address.postalCode}</p>
        </div>
      </div>
    </>
  );
};

export default datos;
