import style from "./Task.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaRegCheckCircle } from "react-icons/fa";
import { RiCloseCircleLine } from "react-icons/ri";
import { getTask } from "../../apiCalls/taskCalls";
import { convertDate } from "../../functions/convertDate";

export default function Task() {
    const params = useParams();
    const [data, setData] = useState({
        name: "",
        description: "",
        urgency: "",
        category: "",
        completed: "",
        createdAt: "",
        updatedAt: "",
    });

    const [urgencys, setUrgencys] = useState(["Baja", "Media", "Alta"]);
    const [categorys, setCategorys] = useState([
        "Trabajo",
        "Personal",
        "Estudio",
        "Salud",
        "Entretenimiento",
        "Finanzas",
        "Proyectos",
        "Compras",
        "Eventos",
    ]);

    useEffect(() => {
        getTask(params.id, setData);
    }, []);

    const onInput = (e) => {
        setData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className={style.container}>
            <Navbar />
            <div className={style.containerData}>
                <div className={style.containerDataTitle}>
                    Detalles de la tarea
                </div>
                <div className={style.containerDataForm}>
                    <div className={style.containerDataFormInputs}>
                        <div className={style.containerDataFormInputsSection}>
                            <div
                                className={
                                    style.containerDataFormInputsSectionName
                                }
                            >
                                Nombre
                            </div>
                            <input
                                className={
                                    style.containerDataFormInputsSectionInput
                                }
                                name="name"
                                value={data.name}
                                onChange={onInput}
                            />
                        </div>
                        <div className={style.containerDataFormInputsSection}>
                            <div
                                className={
                                    style.containerDataFormInputsSectionName
                                }
                            >
                                Descripción
                            </div>
                            <textarea
                                className={
                                    style.containerDataFormInputsSectionTextarea
                                }
                                name="description"
                                value={data.description}
                                onChange={onInput}
                            />
                        </div>
                        <div className={style.containerDataFormInputsSection}>
                            <div
                                className={
                                    style.containerDataFormInputsSectionName
                                }
                            >
                                Urgencia
                            </div>
                            <select
                                className={
                                    style.containerDataFormInputsSectionInput
                                }
                                name="urgency"
                                onChange={onInput}
                            >
                                <option hidden>{data.urgency}</option>
                                {urgencys.map((e) => {
                                    if (e !== data.urgency) {
                                        return <option key={e}>{e}</option>;
                                    }
                                })}
                            </select>
                        </div>
                        <div className={style.containerDataFormInputsSection}>
                            <div
                                className={
                                    style.containerDataFormInputsSectionName
                                }
                            >
                                Categoría
                            </div>
                            <select
                                className={
                                    style.containerDataFormInputsSectionInput
                                }
                                name="category"
                                onChange={onInput}
                            >
                                <option hidden>{data.category}</option>
                                {categorys.map((e) => {
                                    if (e !== data.category) {
                                        return <option key={e}>{e}</option>;
                                    }
                                })}
                            </select>
                        </div>
                        <div className={style.containerDataFormInfo}>
                            <div>
                                Completed:{" "}
                                {data.completed ? (
                                    <FaRegCheckCircle
                                        className={style.completed}
                                    />
                                ) : (
                                    <RiCloseCircleLine
                                        className={style.pendient}
                                    />
                                )}
                            </div>
                            <div>
                                Tarea creada el: {convertDate(data.createdAt)}
                            </div>
                            <div>
                                Última actualización:{" "}
                                {convertDate(data.createdAt)}
                            </div>
                        </div>
                    </div>
                    <div className={style.containerDataFormButtons}>
                        <div
                            className={style.containerDataFormButtonsCompleted}
                        >
                            {data.completed
                                ? "Marcar como pendiente"
                                : "Marcar como completa"}
                        </div>
                        <div className={style.containerDataFormButtonsSave}>
                            Guardar
                        </div>
                        <div className={style.containerDataFormButtonsDelete}>
                            Eliminar
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
