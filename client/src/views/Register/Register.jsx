import style from "./Register.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Register() {
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
                <div className={style.containerFormTitle}>Regístrate</div>
                <div className={style.containerFormInputs}>
                    <div className={style.containerFormInputsSection}>
                        <div className={style.containerFormInputsSectionName}>
                            Usuario
                        </div>
                        <input
                            className={style.containerFormInputsSectionInput}
                        />
                    </div>
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
                    <div className={style.containerFormInputsSection}>
                        <div className={style.containerFormInputsSectionName}>
                            Confirmar contraseña
                        </div>
                        <input
                            className={style.containerFormInputsSectionInput}
                        />
                    </div>
                    <div className={style.containerFormInputsCheckbox}>
                        <input type="checkbox" />
                        <div>
                            He leído y acepto los{" "}
                            <a href="#">Términos y Condiciones</a>
                        </div>
                    </div>
                </div>
                <div className={style.containerFormButtons}>
                    <div className={style.containerFormButtonsSubmit}>
                        Registrarse
                    </div>
                    <div className={style.containerFormButtonsRedirect}>
                        ¿Ya tienes una cuenta?{" "}
                        <Link to="/auth/login">Inicia Sesión</Link>
                    </div>
                    <div className={style.containerFormButtonsLinks}>
                        <a
                            href="https://www.linkedin.com/in/gastonvalentini/"
                            target="_blank"
                        >
                            <FaLinkedin
                                className={style.containerFormButtonsLinksLink}
                            />
                        </a>
                        <a
                            href="https://github.com/Gaston-Valentini"
                            target="_blank"
                        >
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
