import "./Navbar.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { LiaBarsSolid } from "react-icons/lia";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
    const nav = useRef();
    const onLogout = () => {
        localStorage.clear();
    };

    const onBars = () => {
        nav.current.classList.toggle("containerLinksActive");
    };

    return (
        <div className={"container"}>
            <div className={"containerLogo"}>
                <img src={logo} />
            </div>
            <LiaBarsSolid className={"containerBars"} onClick={onBars} />
            <div className={"containerLinks"} ref={nav}>
                <Link to="/tasks/create">Crear tarea</Link>
                <Link to="/tasks">Mis tareas</Link>
                <Link to="/profile">Perfil</Link>
                <Link to="/auth/login" onClick={onLogout}>
                    Cerrar sesión
                </Link>
            </div>
        </div>
    );
}
