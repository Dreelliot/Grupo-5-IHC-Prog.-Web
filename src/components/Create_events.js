import React, { useState } from 'react'
import './crear_eventos_style.css';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from "axios";

export const Create_events = () => {
    const cookies = new Cookies();
    const [nombreEvento, setNombreEvento] = useState("");
    const [horaInicio, setHoraInicio] = useState("");
    const [horaFin, setHoraFin] = useState("");
    const [universidad, setUniversidad] = useState("");
    const [sede, setSede] = useState("");
    const [espacio, setEspacio] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [fecha, setFecha] = useState("");
    const [imagen, setImagen] = useState("");
    const [error, setError] = useState(null);

    const nombreAlmacenado = cookies.get('nombre') || 'Invitado'; // Si no hay cookie, establece un valor predeterminado vacío
    const apellidoPatAlmacenado = cookies.get('apellidoPat') || ''; // Si no hay cookie, establece un valor predeterminado vacío

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
    
          .post("http://localhost:3001/eventos", {nombreEvento, horaInicio, horaFin, universidad, sede, espacio, descripcion, fecha, imagen })
          .then((response) => {
            alert("Evento registrado con éxito!");
    
            // Redirige manualmente al usuario a la ruta /authors
            window.location.href = "/Events";
          })
          .catch((error) => {
            console.error("Error al registrar el evento:", error);
            alert("Error al registrar el evento");
          });
      };
    
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
        <form onSubmit={handleSubmit}>
            <label for="nombreEvento">Nombre del Evento:</label>
            <input type="text" id="nombreEvento" name="nombreEvento" value={nombreEvento} onChange={(e)=> setNombreEvento(e.target.value)} required />
            <label for="horaInicio">Hora de Inicio:</label>
            <input type="time" id="horaInicio" name="horaInicio" value={horaInicio} onChange={(e)=> setHoraInicio(e.target.value)} required />
            <label for="horaFin">Hora de Fin:</label>
            <input type="time" id="horaFin" name="horaFin" value={horaFin} onChange={(e)=> setHoraFin(e.target.value)} required />
            <label for="universidad">Universidad:</label>
            <input type="text" id="universidad" name="universidad" value={universidad} onChange={(e)=> setUniversidad(e.target.value)} required />
            <label for="sede">Sede de Universidad:</label>
            <input type="text" id="sede" name="sede" value={sede} onChange={(e)=> setSede(e.target.value)} required />
            <label for="espacio">Espacio en la Universidad:</label>
            <input type="text" id="espacio" name="espacio" value={espacio} onChange={(e)=> setEspacio(e.target.value)} required />
            <label for="descripcion">Descripción del Evento:</label>
            <textarea id="descripcion" name="descripcion" value={descripcion} onChange={(e)=> setDescripcion(e.target.value)} required></textarea>
            <label for="fecha">Fecha del Evento:</label>
            <input type="date" id="fecha" name="fecha" value={fecha} onChange={(e)=> setFecha(e.target.value)} required />
            <label for="imagen">Imagen del Evento:</label>
            <input type="file" id="imagen" name="imagen" accept="image/*" value={imagen} onChange={(e)=> setImagen(e.target.value)} />
            {error && <p className="error-message">{error}</p>}
            <button type="submit" class = "btnblue">Crear Evento</button>
        </form>
    </div>
</body>
    </div>
  )
}
