import axios from "axios";

const create = async (body) => {
    try {
        await axios.post("http://localhost:3000/task/create", body, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
    } catch (error) {
        console.error(error);
    }
};

const getTask = async (id, setData) => {
    try {
        const res = await axios.get(
            `http://localhost:3000/task/getTask/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );
        setData(res.data.task);
    } catch (error) {
        console.error(error);
    }
};

export { create, getTask };
