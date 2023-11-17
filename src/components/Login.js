import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import './registro_style.css';
import { Link } from 'react-router-dom';
import { Signup } from './Signup';
import { Create_events } from './Create_events';

const cookies = new Cookies();

export const Login = () => {
    // Usar el UseState Hook para definir variables de estado
    const [email, SetEmail]= useState("")
    const [password, SetPassword]= useState("")
    const [error, setError] = useState(false)
    const [usuarios, setUsuarios] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .get("http://localhost:3001/usuarios")
            .then((response) => {
                const usuarios = response.data;
                // Buscar un usuario que coincida con las credenciales
                const usuarioAutenticado = usuarios.find(
                    (usuario) => usuario.email === email && usuario.password === password
                );
    
                if (usuarioAutenticado) {
                    // Inicio de sesión exitoso
                    const mensajeBienvenida = `¡Bienvenido, ${usuarioAutenticado.nombre} ${usuarioAutenticado.apellidoPat}!`;
                    alert(mensajeBienvenida);

                    // Almacena el nombre y apellidoPat del usuario en una cookie
                    cookies.set('nombre', usuarioAutenticado.nombre, { path: '/' });
                    cookies.set('apellidoPat', usuarioAutenticado.apellidoPat, { path: '/' });
                    
                    // Redirige manualmente al usuario a la ruta /Events
                    window.location.href = "/Events";
                } else {
                    // Credenciales inválidas
                    setError(true);
                }
            })
            .catch((error) => {
                console.error("Error al iniciar sesión:", error);
                setError(true);
            });
    };




  return (
    <div>
        <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="registro_style.css" />
    <title>Iniciar Sesión</title>
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
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Correo Electrónico:</label>
                <input type="email" value={email} onChange={(e)=>SetEmail(e.target.value)} required />
            </div>

            <div>
                <label htmlFor="contrasena">Contraseña:</label>
                <input type="password" value={password} onChange={(e)=>SetPassword(e.target.value)} required />
            </div>

            <div class="button-container">
                <button type="submit">Iniciar Sesión</button>
            </div>
        </form>
        {error && <p>Credenciales inválidas</p>}
        <div class="login-link">
            No tienes cuenta? Haz clic aquí para <Link to="/Signup"><a>Registrarse</a></Link>
            
        </div>
        <div class="forgot-password-link">
            <Link to="/Reset_pass"><a>Olvidé mi contraseña</a></Link>
        </div>
    </div>
</body>
    </div>
  )
}


