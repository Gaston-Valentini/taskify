import style from "./Login.module.css";

import logo from "../../assets/images/logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Login() {
    return (
        <div className={style.container}>
            <div className={style.containerData}>
                <div className={style.containerDataLogo}>
                    <img src={logo} />
                </div>
                <div className={style.containerDataText}>
                    Organiza tu vida, un paso a la vez <br />
                    Únete a TASKIFY
                </div>
            </div>
            <div className={style.containerForm}>
                <div className={style.containerFormTitle}>Inicia Sesión</div>
                <div className={style.containerFormInputs}>
                    <div className={style.containerFormInputsSection}>
                        <div className={style.containerFormInputsSectionName}>
                            Correo
                        </div>
                        <input
                            className={style.containerFormInputsSectionInput}
                        />
                    </div>
                    <div className={style.containerFormInputsSection}>
                        <div className={style.containerFormInputsSectionName}>
                            Contraseña
                        </div>
                        <input
                            className={style.containerFormInputsSectionInput}
                        />
                    </div>
                </div>
                <div className={style.containerFormButtons}>
                    <div className={style.containerFormButtonsSubmit}>
                        Iniciar Sesión
                    </div>
                    <div className={style.containerFormButtonsRedirect}>
                        ¿Aún no tienes una cuenta? <a href="#">Regístrate</a>
                    </div>
                    <div className={style.containerFormButtonsLinks}>
                        <a href="#">
                            <FaLinkedin
                                className={style.containerFormButtonsLinksLink}
                            />
                        </a>
                        <a href="#">
                            <FaGithub
                                className={style.containerFormButtonsLinksLink}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
