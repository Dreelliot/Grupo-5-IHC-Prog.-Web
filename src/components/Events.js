import React from 'react'
import './eventos_style.css';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';



// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Landing } from './Landing';
import { Create_events } from './Create_events';
import { Posts_wall } from './Posts_wall';

export const Events = () => {
    const cookies = new Cookies();
    const nombreAlmacenado = cookies.get('nombre') || 'Invitado'; // Si no hay cookie, establece un valor predeterminado vacío
    const apellidoPatAlmacenado = cookies.get('apellidoPat') || ''; // Si no hay cookie, establece un valor predeterminado vacío
  return (
    <div>
        <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="eventos_style.css" />
    <title>Eventos - Campusphere</title>
</head>


<body>
    <div class="header">
        <Link to="/"><img class= "Logo" src="/img/logo.png" alt="Mi Logo" /></Link>
    </div>
    <div class="sidebar">
        <div class="profile">
            <img src="img/profilepic.png" alt="Foto de Perfil" />
            <span>{nombreAlmacenado} {apellidoPatAlmacenado}</span>
        </div>
        <div class="menu">
            <Link to="/Events" ><a class="active" >Eventos</a></Link>
            <Link to="/Create_events"><a >Crear Eventos</a></Link>
            <Link to="/Posts_wall"><a>Muro de publicaciones</a></Link>
        </div>
    </div>
    <div class="content">
        <h2>Eventos</h2>
        <div class="event-grid">
       
            <div class="event">
                <img src="img/evento.png" alt="Evento 1" />
                <p>Evento 1</p>
            </div>
           
            <div class="event">
                <img src="img/evento.png" alt="Evento 2" />
                <p>Evento 2</p>
            </div>
       
            <div class="event">
                <img src="img/evento.png" alt="Evento 3" />
                <p>Evento 3</p>
            </div>
            
        </div>
    </div>
</body>
    </div>
  )
}
