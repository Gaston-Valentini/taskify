import { jwtDecode } from "jwt-decode";

const isAuth = () => {
    const token = localStorage.getItem("token");
    const decodeToken = jwtDecode(token);
    if (!token || !decodeToken) {
        throw "Invalid token";
    }
};

export { isAuth };
