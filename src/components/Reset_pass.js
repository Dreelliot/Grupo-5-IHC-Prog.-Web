import React, { useState } from 'react'
import axios from 'axios';
import './registro_style.css';
import { Link } from 'react-router-dom';

export const Reset_pass = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [user, setUser] = useState(null);
    const [error, setError] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.get(`http://localhost:3001/usuarios`);
        const usuarios = response.data;
  
        // Buscar un usuario que coincida con el email
        const usuarioAutenticado = usuarios.find((usuario) => usuario.email === email);
  
        if (usuarioAutenticado && newPassword === confirmPassword) {
          // Actualizar la contraseña y mantener los demás datos
          await axios.put(`http://localhost:3001/usuarios/${usuarioAutenticado.id}`, {
            ...usuarioAutenticado, // Mantener los datos existentes
            password: newPassword, // Actualizar la contraseña
          });
  
          alert("Contraseña actualizada con éxito!");
          window.location.href = "/Login";
        } else {
          // Credenciales inválidas
          setError(true);
        }
      } catch (error) {
        console.error("Error al cambiar la contraseña:", error);
  
        if (error.response && error.response.status === 404) {
          // El usuario no existe
          setError(true);
        } else {
          // Otro error
          setError(true);
        }
      }
    };


  return (
    <div>
        <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="registro_style.css" />
    <title>Recuperar Contraseña</title>
</head>
<body>
    <div class="header">
        <div class="logo">
            <Link to="/"><img src="/img/logo.png" alt="Mi Logo" /></Link>
        </div>
        <div class="buttons">
            <Link to="/Signup"><button>Sign In</button></Link>
            <Link to="/Login"><button>Log In</button></Link>

        </div>
    </div>
    <div class="container">
        <h2>Recuperar Contraseña</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label for="email">Correo Electrónico:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div>
                <label for="nueva-contrasena">Nueva Contraseña:</label>
                <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
            </div>

            <div>
                <label for="confirmar-contrasena">Confirmar Contraseña:</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </div>

            <div class="button-container">
                <button type="submit">Reiniciar</button>
            </div>
        </form>
        
        {error && <p>Error al cambiar la contraseña</p>}
    </div>
</body>
    </div>
  )
}
