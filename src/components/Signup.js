import './registro_style.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Login } from './Login';
import axios from "axios";


export const Signup = () => {
    const [nombre, setNombre] = useState('');
    const [apellidoMat, setApellidoMat] = useState('');
    const [apellidoPat, setApellidoPat] = useState('');
    const [email, setEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      axios
  
        .post("http://localhost:3001/usuarios", {nombre, apellidoPat, apellidoMat, email, password })
        .then((response) => {
          alert("Usuario registrado con éxito!");
  
          // Redirige manualmente al usuario a la ruta /authors
          window.location.href = "/Login";
        })
        .catch((error) => {
          console.error("Error al registrar el usuario:", error);
          alert("Error al registrar el usuario");
        });
    };


  return (
    <>
    {error && <div style={{ color: 'red' }}>{error}</div>}
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="registro_style.css" />
    <title>Registro de Cuenta</title>
</head>

<body>

<header class="header">
    <div class="logo">
        <Link to="/"><img src="/img/logo.png" alt="Mi Logo" /></Link>
      </div>

        <div class="buttons">
          <Link to="/Signup"><button>Sign In</button></Link>
          <Link to="/Login"><button>Log In</button></Link>
        </div>

</header>
    
    <div class="container">
        <h2>Registro de Cuenta</h2>
        <form onSubmit={handleSubmit}>
            <div class="name-fields">
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" value={nombre} onChange={(e)=> setNombre(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="apellidoPat">Apellido Paterno:</label>
                    <input type="text" value={apellidoPat} onChange={(e)=> setApellidoPat(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="apellidoMat">Apellido Materno:</label>
                    <input type="text" value={apellidoMat} onChange={(e)=> setApellidoMat(e.target.value)} required />
                </div>
            </div>
            
            <div>
                <label htmlFor="email">Correo Electrónico:</label>
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} required />
            </div>

            <div>
                <label for="contrasena">Contraseña:</label>
                <input type="password" value={password} onChange={(e)=> SetPassword(e.target.value)} required />
            </div>

            <div class="button-container">
                <button type="submit">Crear Cuenta</button>
            </div>
        </form>
        {error && <p className="error-message">{error}</p>}
        <div class="login-link">
            ¿Ya tienes cuenta? Haz clic aquí para <Link to="/login">ingresar</Link>
        </div>
    </div>
</body>
    
    </>
  )
}

