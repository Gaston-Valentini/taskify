import style from "./Register.module.css";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { validateInput, validateTerms } from "../../validations/validateField";
import { register } from "../../apiCalls/authCalls";

export default function Register() {
    const [userData, setUserData] = useState({});
    const [userErrors, setUserErrors] = useState({});
    const terms = useRef();

    const onInput = (e) => {
        setUserData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
        validateInput(userData, setUserErrors, e.target.name, e.target.value);
    };

    const onSubmit = () => {
        validateTerms(setUserErrors, terms);
        if (
            Object.keys(userData).length === 4 &&
            Object.keys(userErrors).length === 0
        ) {
            register(userData, setUserErrors);
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
                <div className={style.containerFormTitle}>Regístrate</div>
                <div className={style.containerFormInputs}>
                    <div className={style.containerFormInputsSection}>
                        <div className={style.containerFormInputsSectionName}>
                            Usuario
                        </div>
                        <input
                            className={style.containerFormInputsSectionInput}
                            type="text"
                            maxLength={20}
                            name="username"
                            onBlur={onInput}
                        />
                    </div>
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
                    <div className={style.containerFormInputsSection}>
                        <div className={style.containerFormInputsSectionName}>
                            Confirmar contraseña
                        </div>
                        <input
                            className={style.containerFormInputsSectionInput}
                            type="password"
                            maxLength={20}
                            name="confirmPassword"
                            onChange={onInput}
                        />
                        <span className={style.containerFormInputsSectionError}>
                            {userErrors.confirmPassword}
                        </span>
                    </div>
                    <div className={style.containerFormInputsTerms}>
                        <div className={style.containerFormInputsTermsCheckbox}>
                            <input
                                type="checkbox"
                                name="terms"
                                ref={terms}
                                onClick={() =>
                                    validateTerms(setUserErrors, terms)
                                }
                            />
                            <div>
                                He leído y acepto los{" "}
                                <a href="#">Términos y Condiciones</a>
                            </div>
                        </div>
                        <span className={style.containerFormInputsSectionError}>
                            {userErrors.terms}
                        </span>
                    </div>
                </div>
                <div className={style.containerFormButtons}>
                    <div
                        className={style.containerFormButtonsSubmit}
                        onClick={onSubmit}
                    >
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
