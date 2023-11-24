import style from "./Navbar.module.css";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
    return (
        <div className={style.container}>
            <div className={style.containerLogo}>
                <img src={logo} />
            </div>
            <div className={style.containerLinks}>
                <a href="#">Crear tarea</a>
                <a href="#">Mis tareas</a>
                <a href="#">Perfil</a>
                <a href="#">Cerrar sesión</a>
            </div>
        </div>
    );
}
