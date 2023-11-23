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

const login = async (body, setUserErrors) => {
    try {
        const res = await axios.post("http://localhost:3000/auth/login", body);
        console.log(res);
    } catch (error) {
        if (
            error.response.data.message ===
            "No existe un usuario registrado con ese correo electrónico"
        ) {
            setUserErrors((prevState) => ({
                ...prevState,
                email: error.response.data.message,
            }));
        } else if (error.response.data.message === "Contraseña incorrecta") {
            setUserErrors((prevState) => ({
                ...prevState,
                password: error.response.data.message,
            }));
        } else {
            setUserErrors((prevState) => {
                const { email, ...rest } = prevState;
                return { ...rest };
            });
            setUserErrors((prevState) => {
                const { password, ...rest } = prevState;
                return { ...rest };
            });
        }
    }
};

export { register, login };
