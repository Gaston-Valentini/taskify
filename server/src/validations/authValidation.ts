const validateFields = (email: string, password: string) => {
    if (
        email === undefined ||
        email === null ||
        email === "" ||
        password === undefined ||
        password === null ||
        password === ""
    ) {
        return {
            success: false,
            message: "Debes completar los campos obligatorios",
        };
    }

    const emailRegex =
        /^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/.test(email);
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
        password
    );

    if (!emailRegex) {
        return {
            success: false,
            message: "Escriba un formato de correo electrónico válido",
        };
    }

    if (!passwordRegex) {
        return {
            success: false,
            message:
                "La contraseña debe tener un mínimo de 8 caracteres, letras y números",
        };
    }

    return {
        success: true,
        message: "Validación superada",
    };
};

export { validateFields };
