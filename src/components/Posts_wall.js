import React from 'react'
import './posts_style.css';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';


export const Posts_wall = () => {
    const cookies = new Cookies();
    const nombreAlmacenado = cookies.get('nombre') || 'Invitado'; // Si no hay cookie, establece un valor predeterminado vacío
    const apellidoPatAlmacenado = cookies.get('apellidoPat') || ''; // Si no hay cookie, establece un valor predeterminado vacío

  return (
    <div>
        <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="posts_style.css" />
    <title>Muro de Publicaciones</title>
</head>
<body>
    <div class="header">
        <Link to="/"><img class= "Logo" src="/img/logo.png" alt="Mi Logo" /></Link>
    </div>
    <div class="sidebar">
      <div class="profile">
            <img src="/img/profilepic.png" alt="Foto de Perfil" />
            <span>{nombreAlmacenado} {apellidoPatAlmacenado}</span>
      </div>
        <div class="menu">
            <Link to="/Events" ><a >Eventos</a></Link>
            <Link to="/Create_events"><a >Crear Eventos</a></Link>
            <Link to="/Posts_wall"><a class="active">Muro de publicaciones</a></Link>
        </div>
    </div>
    <div class="content">
        
        <div class="post">
            <div class="post-header">
                <img src="/img/profilepic.png" alt="profilepic" />
                <div class="post-info">
                    <div class="user-info">
                        <p>Federico Gutierrez</p>
                        <span>Hace 2 horas - 25 de octubre</span>
                    </div>
                </div>
            </div>
            <p>Vengan todos al Elenco Glee UPC, la van a pasar muy bien!</p>
            <img src="img/Club Glee UPC.png" alt="Imagen 1" />
        </div>
        <div class="post">
            <div class="post-header">
                <img src="/img/profilepic.png" alt="profilepic" />
                <div class="post-info">
                    <div class="user-info">
                        <p>Giorgio Cachis</p>
                        <span>Hace 5 horas - 25 de octubre</span>
                    </div>
                </div>
            </div>
            <p>Video de cómo la pasamos en el último evento del club Glee, vengan!</p>
            <img src="img/Publicación 2.png" alt="Imagen 2" />
        </div>
        
    </div>
</body>
    </div>
  )
}
