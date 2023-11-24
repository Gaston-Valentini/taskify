import style from "./Tasks.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";

export default function Tasks() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/user/getUser", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((res) => {
                setTasks(res.data.user[0].tasks);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className={style.container}>
            <Navbar />
            <div className={style.containerTasks}>
                {tasks.map((e) => e.name)}
            </div>
        </div>
    );
}
