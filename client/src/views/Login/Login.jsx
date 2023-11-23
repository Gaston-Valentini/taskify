import style from "./Login.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { validateInput } from "../../validations/validateField";
import { login } from "../../apiCalls/authCalls";

export default function Login() {
    const [userData, setUserData] = useState({});
    const [userErrors, setUserErrors] = useState({});

    const onInput = (e) => {
        setUserData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
        validateInput(userData, setUserErrors, e.target.name, e.target.value);
    };

    const onSubmit = () => {
        if (
            Object.keys(userData).length === 2 &&
            Object.keys(userErrors).length === 0
        ) {
            login(userData, setUserErrors);
        }
    };

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
                            type="email"
                            maxLength={50}
                            name="email"
                            onBlur={onInput}
                        />
                        <span className={style.containerFormInputsSectionError}>
                            {userErrors.email}
                        </span>
                    </div>
                    <div className={style.containerFormInputsSection}>
                        <div className={style.containerFormInputsSectionName}>
                            Contraseña
                        </div>
                        <input
                            className={style.containerFormInputsSectionInput}
                            type="password"
                            maxLength={20}
                            name="password"
                            onBlur={onInput}
                        />
                        <span className={style.containerFormInputsSectionError}>
                            {userErrors.password}
                        </span>
                    </div>
                </div>
                <div className={style.containerFormButtons}>
                    <div
                        className={style.containerFormButtonsSubmit}
                        onClick={onSubmit}
                    >
                        Iniciar Sesión
                    </div>
                    <div className={style.containerFormButtonsRedirect}>
                        ¿Aún no tienes una cuenta?{" "}
                        <Link to="/auth/register">Regístrate</Link>
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
