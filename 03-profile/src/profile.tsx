import homeImage from './assets/home.jpg';
import githubImage from './assets/github.png';
import emailImage from './assets/email.png';
import linkedinImage from './assets/linkedin.png';
import myImage from './assets/1.jpg';
import Home from './Home'; // Your Home component
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Profile() {

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [asunto, setAsunto] = useState('');
    const [comentarios, setComentarios] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setNombre('');
        setCorreo('');
        setAsunto('');
        setComentarios('');
        setTelefono('');
        alert(`Gracias por sus comentarios ${nombre}, te contactaremos a ${correo} en caso de ser necesario.`);
    };

    return (
        <>
            <div className="navbar">
                <Link to="/" className="left-image">
                    <img src={homeImage} alt="Left Image" />
                </Link>
                <div className="right-images">
                    <a href="https://github.com/EduardodeValle"><img src={githubImage} alt="Link Image" /></a>
                    <a href="mailto:jsvalle50@gmail.com"><img src={emailImage} alt="Link Image" /></a>
                    <a href="https://www.linkedin.com/in/jos%C3%A9-eduardo-de-valle-lara-8636b21b6/"><img
                        src={linkedinImage} alt="Link Image" /></a>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="asunto">Asunto:</label><br />
                <input type="text" id="asunto" value={asunto} onChange={(e) => setAsunto(e.target.value)} required style={{ color: 'black' }} /><br />

                <label htmlFor="nombre">Nombre:</label><br />
                <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required style={{ color: 'black' }} /><br />

                <label htmlFor="comentarios">Comentarios:</label><br />
                <textarea id="comentarios" value={comentarios} onChange={(e) => setComentarios(e.target.value)} required style={{ color: 'black' }}></textarea><br />

                <label htmlFor="correo">Correo electrónico:</label><br />
                <input type="email" id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} required style={{ color: 'black' }} /><br />

                <label htmlFor="telefono">Número de teléfono:</label><br />
                <input type="tel" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required style={{ color: 'black' }} /><br />

                <button className="button" type="submit">Enviar</button>
            </form>

        </>
    )
}

export default Profile
