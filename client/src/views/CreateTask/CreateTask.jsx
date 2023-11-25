import style from "./CreateTask.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { create } from "../../apiCalls/taskCalls";
import { isAuth } from "../../validations/autenticated";

export default function CreateTask() {
    const navigate = useNavigate();
    useEffect(() => {
        try {
            isAuth();
        } catch (error) {
            navigate("/auth/login");
        }
    }, []);

    const [task, setTask] = useState({});

    const onInput = (e) => {
        setTask((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = () => {
        if (task.name && task.description && task.urgency && task.category) {
            create(task);
            navigate("/tasks");
        }
    };

    return (
        <div className={style.container}>
            <Navbar />
            <div className={style.containerData}>
                <div className={style.containerDataTitle}>Agrega una tarea</div>
                <div className={style.containerDataForm}>
                    <div className={style.containerDataFormSection}>
                        <div className={style.containerDataFormSectionName}>
                            Nombre
                        </div>
                        <input
                            className={style.containerDataFormSectionInput}
                            name="name"
                            onChange={onInput}
                        />
                    </div>
                    <div className={style.containerDataFormSection}>
                        <div className={style.containerDataFormSectionName}>
                            Descripción
                        </div>
                        <textarea
                            className={style.containerDataFormSectionTextarea}
                            name="description"
                            onChange={onInput}
                        />
                    </div>
                    <div className={style.containerDataFormSection}>
                        <div className={style.containerDataFormSectionName}>
                            Urgencia
                        </div>
                        <select
                            className={style.containerDataFormSectionInput}
                            name="urgency"
                            onChange={onInput}
                        >
                            <option hidden>Selecciona una opción</option>
                            <option>Baja</option>
                            <option>Media</option>
                            <option>Alta</option>
                        </select>
                    </div>
                    <div className={style.containerDataFormSection}>
                        <div className={style.containerDataFormSectionName}>
                            Categoría
                        </div>
                        <select
                            className={style.containerDataFormSectionInput}
                            name="category"
                            onChange={onInput}
                        >
                            <option hidden>Selecciona una opción</option>
                            <option>Trabajo</option>
                            <option>Personal</option>
                            <option>Estudio</option>
                            <option>Salud</option>
                            <option>Entretenimiento</option>
                            <option>Finanzas</option>
                            <option>Proyectos</option>
                            <option>Compras</option>
                            <option>Eventos</option>
                        </select>
                    </div>
                    <div
                        className={style.containerDataFormSectionSubmit}
                        onClick={onSubmit}
                    >
                        Agregar tarea
                    </div>
                </div>
            </div>
        </div>
    );
}
