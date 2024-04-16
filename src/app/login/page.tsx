"use client"
import { useState } from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import styles from "./login.module.css";
import Nav from '../nav/page';

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null); // Estado para almacenar el token

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
      
        // Redirigir al usuario a la página de dashboard
        router.push('/datos');
      } else {
        console.error('Error de inicio de sesión:', response.statusText);
      }
      
    } catch (error) {
      console.error('Error de red:', error);
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
