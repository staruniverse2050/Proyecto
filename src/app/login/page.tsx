"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import Image from "next/image";
import Nav from '../nav/page';
import styles from "./login.module.css";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Verificar si ya hay un token guardado en el localStorage
    const token = localStorage.getItem('token');
    if (token) {
      // Mostrar SweetAlert indicando que el usuario ya está logueado
      Swal.fire({
        icon: 'info',
        title: 'Ya estás logueado',
        text: 'Tus datos ya están guardados. ¿Deseas continuar?',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirigir al usuario a la página de datos
          router.push('/datos');
        }
      });
    }
  }, []);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 30,
        })
      });
    
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        
        // Guardar el token en el localStorage
        localStorage.setItem('token', data.token);
      
        // Redirigir al usuario a la página de datos
        router.push('/datos');
      } else {
        // Si la respuesta no es exitosa
        console.error('Error de inicio de sesión:', response.statusText);
        // Mostrar SweetAlert si los datos no coinciden
        Swal.fire({
          icon: 'error',
          title: 'Error de inicio de sesión',
          text: 'El nombre de usuario o la contraseña son incorrectos. Por favor, inténtalo de nuevo.',
          confirmButtonText: 'Entendido'
        });
      }
    } catch (error) {
      // Si hay un error de red
      console.error('Error de red:', error);
      // Mostrar SweetAlert de error de red
      Swal.fire({
        icon: 'error',
        title: 'Error de red',
        text: 'Hubo un problema al intentar conectarse al servidor. Por favor, inténtalo de nuevo más tarde.',
        confirmButtonText: 'Entendido'
      });
    }
  };

  return (
    <main>
      <Nav />
      <div className={styles.container}>
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <Image src="/login.png" alt="Login" width={100} height={100} />
            <label htmlFor="username" className={styles.label}>Nombre de usuario:</label>
            <input
              type="text"
              id="username"
              value={username}
              className={styles.textInput}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="password" className={styles.label}>Contraseña:</label>
            <input
              type="password" 
              id="password"
              value={password}
              className={styles.textInput}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.button}>Iniciar Sesión</button>
        </form>
      </div>
    </main>
  );
};

export default Login;
