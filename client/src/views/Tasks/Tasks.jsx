import style from "./Tasks.module.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import { isAuth } from "../../validations/autenticated";

export default function Tasks() {
    const navigate = useNavigate();
    useEffect(() => {
        try {
            isAuth();
        } catch (error) {
            navigate("/auth/login");
        }
    }, []);

    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:3000/user/getUser", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((res) => {
                setTasks(res.data.user[0].tasks);
                setFilteredTasks(res.data.user[0].tasks);
            })
            .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
        const filtered = tasks.filter((task) =>
            task.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredTasks(filtered);
    }, [searchQuery, tasks]);

    return (
        <div className={style.container}>
            <Navbar />
            <div className={style.containerData}>
                <div className={style.containerDataTitle}>Tus tareas</div>
                <input
                    className={style.containerDataSearchbar}
                    placeholder="Busca una tarea..."
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className={style.containerDataTasks}>
                    <div className={style.containerDataTasksIncompleted}>
                        <div
                            className={style.containerDataTasksIncompletedTitle}
                        >
                            Tareas pendientes
                        </div>
                        <div
                            className={style.containerDataTasksIncompletedTasks}
                        >
                            {filteredTasks
                                .filter((task) => !task.completed)
                                .map((e) => (
                                    <Link
                                        to={`${e.id}`}
                                        key={e.id}
                                        className={
                                            style.containerDataTasksIncompletedTasksTask
                                        }
                                    >
                                        {e.name}
                                    </Link>
                                ))}
                        </div>
                    </div>
                    <hr></hr>
                    <div className={style.containerDataTasksCompleted}>
                        <div className={style.containerDataTasksCompletedTitle}>
                            Tareas completadas
                        </div>
                        <div className={style.containerDataTasksCompletedTasks}>
                            {filteredTasks
                                .filter((task) => task.completed)
                                .map((e) => (
                                    <Link
                                        to={`${e.id}`}
                                        key={e.id}
                                        className={
                                            style.containerDataTasksCompletedTasksTask
                                        }
                                    >
                                        {e.name}
                                    </Link>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
