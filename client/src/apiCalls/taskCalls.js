import axios from "axios";

const create = async (body) => {
    try {
        const res = await axios.post(
            "http://localhost:3000/task/create",
            body,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );
        console.log(res);
    } catch (error) {
        console.error(error);
    }
};

export { create };
