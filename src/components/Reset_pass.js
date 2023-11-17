import React from 'react'
import './registro_style.css';
import { Link } from 'react-router-dom';

export const Reset_pass = () => {
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
        <form>
            <div>
                <label for="email">Correo Electrónico:</label>
                <input type="email" id="email" name="email" required />
            </div>

            <div>
                <label for="nueva-contrasena">Nueva Contraseña:</label>
                <input type="password" id="nueva-contrasena" name="nueva-contrasena" required />
            </div>

            <div>
                <label for="confirmar-contrasena">Confirmar Contraseña:</label>
                <input type="password" id="confirmar-contrasena" name="confirmar-contrasena" required />
            </div>

            <div class="button-container">
                <button type="submit">Reiniciar</button>
            </div>
        </form>
    </div>
</body>
    </div>
  )
}
