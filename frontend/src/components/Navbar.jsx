import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { logout } from '@services/auth.service.js';
import '@styles/navbar.css';
import { useState } from "react";
import ChangePasswordPopup from '@components/ChangePasswordPopup';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const user = JSON.parse(sessionStorage.getItem('usuario')) || '';
    const userRole = user?.rol;
    const [menuOpen, setMenuOpen] = useState(false);
    const [isPasswordPopupOpen, setIsPasswordPopupOpen] = useState(false);

    const logoutSubmit = () => {
        try {
            logout();
            navigate('/auth');   
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    const toggleMenu = () => {
        if (!menuOpen) {
            removeActiveClass();
        } else {
            addActiveClass();
        }
        setMenuOpen(!menuOpen);
    };

    const removeActiveClass = () => {
        const activeLinks = document.querySelectorAll('.nav-menu ul li a.active');
        activeLinks.forEach(link => link.classList.remove('active'));
    };

    const addActiveClass = () => {
        const links = document.querySelectorAll('.nav-menu ul li a');
        links.forEach(link => {
            if (link.getAttribute('href') === location.pathname) {
                link.classList.add('active');
            }
        });
    };

    return (
        <>
            <nav className="navbar">
                <div className={`nav-menu ${menuOpen ? 'activado' : ''}`}>
                    <ul>
                        <li>
                            <NavLink 
                                to="/home" 
                                onClick={() => { 
                                    setMenuOpen(false); 
                                    addActiveClass();
                                }} 
                                activeClassName="active"
                            >
                                Inicio
                            </NavLink>
                        </li>
                        {userRole === 'administrador' && (
                        <li>
                            <NavLink 
                                to="/users" 
                                onClick={() => { 
                                    setMenuOpen(false); 
                                    addActiveClass();
                                }} 
                                activeClassName="active"
                            >
                                Personal
                            </NavLink>
                        </li>
                        )}
                        {userRole === 'administrador' && (
                            <li>
                                <NavLink
                                    to="/Inventario"
                                    onClick={() => {
                                        setMenuOpen(false);
                                        addActiveClass();
                                    }}
                                    activeClassName="active"
                                >
                                    Inventario
                                </NavLink>
                            </li>
                        )}


                        {(userRole === 'mecanico' || userRole === 'vendedor') && (
                            <li>
                                <NavLink to="/check-in-out" onClick={() => setMenuOpen(false)}>
                                    Ingreso/Salida
                                </NavLink>
                            </li>
                        )}
                        {userRole === 'mecanico' || userRole === 'vendedor' ? (
                            <li>
                                <NavLink to="/my-shifts">Mis Turnos</NavLink>
                            </li>
                        ) : null}
                        
                       <li>
                            <button 
                                className="change-password-button"
                                onClick={() => setIsPasswordPopupOpen(true)}
                            >
                                Cambiar contraseña
                            </button>
                        </li>

                        <li>
                            <NavLink 
                                to="/auth" 
                                onClick={() => { 
                                    logoutSubmit(); 
                                    setMenuOpen(false); 
                                }} 
                                activeClassName="active"
                            >
                                Cerrar sesión
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
            {isPasswordPopupOpen && (
                <ChangePasswordPopup show={isPasswordPopupOpen} setShow={setIsPasswordPopupOpen} />
            )}
        </>
    );
};

export default Navbar;
