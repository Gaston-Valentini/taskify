import axios from "axios";

const register = async (body, setUserErrors) => {
    try {
        await axios.post("http://localhost:3000/auth/register", body);
    } catch (error) {
        if (
            error.response.data.message ===
            "Ya existe un usuario registrado con ese correo electrónico"
        ) {
            setUserErrors((prevState) => ({
                ...prevState,
                email: error.response.data.message,
            }));
        } else {
            setUserErrors((prevState) => {
                const { email, ...rest } = prevState;
                return { ...rest };
            });
        }
    }
};

export { register };
