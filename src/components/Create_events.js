import React from 'react'
import './crear_eventos_style.css';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';


export const Create_events = () => {
    const cookies = new Cookies();
    const nombreAlmacenado = cookies.get('nombre') || 'Invitado'; // Si no hay cookie, establece un valor predeterminado vacío
    const apellidoPatAlmacenado = cookies.get('apellidoPat') || ''; // Si no hay cookie, establece un valor predeterminado vacío
  return (
    <div>
        <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="crear_eventos_style.css" />
    <title>Crear Evento</title>
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
            <Link to="/Create_events"><a class="active">Crear Eventos</a></Link>
            <Link to="/Posts_wall"><a>Muro de publicaciones</a></Link>
        </div>
    </div>
    <div class="content">
        <h2>Crear un Evento</h2>
        <form>
            <label for="nombreEvento">Nombre del Evento:</label>
            <input type="text" id="nombreEvento" name="nombreEvento" required />
            <label for="horaInicio">Hora de Inicio:</label>
            <input type="time" id="horaInicio" name="horaInicio" required />
            <label for="horaFin">Hora de Fin:</label>
            <input type="time" id="horaFin" name="horaFin" required />
            <label for="universidad">Universidad:</label>
            <input type="text" id="universidad" name="universidad" required />
            <label for="sede">Sede de Universidad:</label>
            <input type="text" id="sede" name="sede" required />
            <label for="espacio">Espacio en la Universidad:</label>
            <input type="text" id="espacio" name="espacio" required />
            <label for="descripcion">Descripción del Evento:</label>
            <textarea id="descripcion" name="descripcion" required></textarea>
            <label for="fecha">Fecha del Evento:</label>
            <input type="date" id="fecha" name="fecha" required />
            <label for="imagen">Imagen del Evento:</label>
            <input type="file" id="imagen" name="imagen" accept="image/*" />
            <button type="submit" class = "btnblue">Crear Evento</button>
        </form>
    </div>
</body>
    </div>
  )
}
