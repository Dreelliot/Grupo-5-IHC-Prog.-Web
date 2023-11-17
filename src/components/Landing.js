import React from 'react'
import './landing.css';
import { Link } from 'react-router-dom';
import { Signup } from './Signup';

export const Landing = () => {
  return (
    <>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="landing.css" />
        <title>Landing Page</title>
    </head> 

    <body className="Landing">
    <header>
          <div className="grid-container">
            <div className="grid-item"><img src="\img\logo.png" alt="Mi Logo" /></div>
            <div className="grid-item"><input type="text" className="buscar" placeholder="Search.." /></div>
            <div className="grid-item"><div className="Lupa"><img src="icons\magnifying-glass-svgrepo-com.svg" alt="Lupa" style={{ width: '40px', height: '40px' }} /></div></div>
            <div className="grid-item"><li><Link to="/"><h3>Inicio</h3></Link></li></div>
            <div className="grid-item"><li><Link to="/Events"><h3>Explorar</h3></Link></li></div>
            <div className="grid-item"><li><Link to="/Login"><h3>Login</h3></Link></li></div>
            <div className="grid-item"><li><Link to="/Signup"><h3>Registrarse</h3></Link></li></div>
          </div>

        </header>
    
    <section className="presentacion">
        <div className="grid-container2">
            <img src="img/hombre-campus-universitario.jpg" alt="Inicio"/>
            <ul>
                <h2>CAMPUSSPHERE : Tu Portal de Eventos Universitarios</h2>
                <h1 style={{ marginTop: '15px', fontSize: '30px' }}>Descubre, organiza y participa en emocionantes eventos universitarios de manera sencilla.</h1>
                <div class="LogoT"><img src="\img\logo Technova.png" alt="Technova" /></div>
            </ul>
        </div>
    </section>

    <section className="bienvenida">
        <div className="grid-container3">
            <div className="grid-item1">
                <h1>¡Bienvenido a CampusSphere! La plataforma diseñada para estudiantes y profesores que buscan eventos universitarios de calidad.</h1>
                <div className="Botones">
                    <Link to="/Signup"><button className="Start">Comienza tu experiencia</button></Link>
                    <Link to="/Events"><button className="Explore">Explora eventos</button></Link>
                </div>
            </div>
            <div class="grid-item2">
                <div className="imagen"><img src="img/eventos-sociales-y-fiestas-para-estudiantes-universitarios.jpg" alt="eventos1" /></div>
                <div className="imagen"><img src="img/Compaeros-en-la-Universidad.jpg" alt="eventos2" /></div>
                <div className="imagen"><img src="img/ponente-business-meeting.jpg" alt="eventos3" /></div>
                <div className="imagen"><img src="img/alumnos-facultad-de-educacion.jpg" alt="eventos4" /></div>
            </div>

        </div>
    </section>

    <section className="Caracteristicas">
        <h1>Nuestras principales caracteristicas</h1>
        <div className="grid-container4">
            <div className="grid-itemA">
                <div className="myCard">
                    <div className="myCardHeader">
                        <img src="icons/search-alt-2-svgrepo-com.svg" />
                    </div>
                    <div className="myCardBody">
                        <h1>Búsqueda de Eventos</h1>
                        <p>Encuentra eventos que te interesan con facilidad. Filtra por fecha, tema o ubicación.</p>
                    </div>
                    <div className="myCardFooter">
                        <p>más información...</p>
                    </div>
                </div>
            </div>
            <div className="grid-itemA" style={{ backgroundColor: '#E9D985' }}>
                <div className="myCard">
                    <div className="myCardHeader">
                        <img src="icons/create-new-svgrepo-com.svg" />
                    </div>
                    <div className="myCardBody">
                        <h1>Creación de Eventos</h1>
                        <p>Organiza tu propio evento en pocos pasos. Promociona y llega a tu audiencia de manera efectiva</p>
                    </div>
                    <div className="myCardFooter">
                        <p>más información...</p>
                    </div>
                </div>
            </div>
            <div className="grid-itemA">
                <div className="myCard">
                    <div className="myCardHeader">
                        <img src="icons/calendar-lines-pen-svgrepo-com.svg" />
                    </div>
                    <div className="myCardBody">
                        <h1>Calendario Personalizado</h1>
                        <p>Crea tu calendario personal de eventos. Recibe recordatorios y recomendaciones.</p>
                    </div>
                    <div class="myCardFooter">
                        <p>más información...</p>
                    </div>
                </div>
            </div>
            <div className="grid-itemA" style={{ backgroundColor: '#E9D985' }}>
                <div className="myCard">
                    <div className="myCardHeader">
                        <img src="icons/notification-6-svgrepo-com.svg" />
                    </div>
                    <div className="myCardBody">
                        <h1>Notificaciones en Tiempo Real</h1>
                        <p>Mantente al tanto de los eventos y las actualizaciones a través de notificaciones.</p>
                    </div>
                    <div className="myCardFooter">
                        <p>más información...</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="CardFooter">
            <p>¿Te llama la atención? Haz clic aquí</p>
            <Link to="/Signup"><button className="Start">REGISTRARSE</button></Link>
        </div>
    </section>

    <section className="Comentarios">
        <h1>¿Qué dicen nuestros clientes sobre nosotros?</h1>
        <h1>Cómo CampusSphere les ayudó a alcanzar sus objetivos y mejorar su experiencia en eventos.</h1>
        <div className="grid-container5">
            <div className="grid-itemB">
                <h1>Jaime, el estudiante organizador.<p>"Jaime, un estudiante comprometido, organizó su propio evento y llegó a cientos de estudiantes. Aprende cómo lo hizo."</p></h1>
                <img src="img/jaime.jpg" />
            </div>
            <div className="grid-itemB">
                <h1>Angela, la estudiante interesada.<p>"Angela encontró el evento perfecto para su interés y se unió a una comunidad de mentes afines."</p></h1>
                <img src="img/anggela.jpg" />
            </div>
            <div className="grid-itemB1"><h2 >explorar más historias...</h2></div>
        </div>
        <div className="Histories">
        </div>
    </section>

    <section className="Atention">
        <div className="grid-container6">
            <div className="News">
                <div className="New">
                    <h1 style={{ color:'#E9D985' }}>Integración de Redes Sociales</h1>
                    <h2>"Conéctate y comparte eventos en tus redes favoritas como WhatsApp, Instagram y Facebook."</h2>
                    <img src="icons/social-media-svgrepo-com.svg" />
                    <p>más información...</p>
                </div>
                <div className="New">
                    <h1 style={{ color:'#E9D985' }}>Información del Organizador</h1>
                    <h2>"Conoce a los organizadores, su experiencia y su pasión. Establece confianza y relaciones sólidas."</h2>
                    <img src="icons/calendar-user-svgrepo-com.svg" />
                    <p>más información...</p>

                </div>
            </div>
            <div className="Call">
                <h1> Únete a CampusSphere y Amplía tus Horizontes</h1>
                <img style={{ marginLeft: '70px' }} src="img/grupo-adolescentes-felices.jpg" />
                <h2> No te pierdas ningún evento universitario. ¡Únete hoy y disfruta de la experiencia!</h2>
                <Link to="/Signup"><button className="Start" >¡ REGÍSTRATE AQUÍ !</button></Link>            
            </div>
        </div>
    </section>

    <section className="contacto">
        <h2>Contacto</h2>
        <p>¡Contáctanos para obtener más información!</p>
        <form>
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Correo Electrónico" />
            <button type="submit" className= "Start" style={{ marginLeft: '33px' }} >Enviar</button>
        </form>
    </section>

    <footer>
    <div className="footer-content">
        <div className="social-media">
            Siguenos en nuestras redes:
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
        </div>
        <div>
            <a href="#">Acerca de nosotros</a>
            <a href="#">Contacto</a>
            <div className="copyright">&copy; Technova</div>
        </div>
    </div>
</footer>
    </body>

    </>
    


  )
}
