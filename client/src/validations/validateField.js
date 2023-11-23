const validateInput = (userData, setUserErrors, field, value) => {
    switch (field) {
        case "email":
            const emailRegex =
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
            if (!emailRegex) {
                setUserErrors((prevState) => ({
                    ...prevState,
                    email: "Escriba un formato de correo electónico",
                }));
            } else {
                setUserErrors((prevState) => {
                    const { email, ...rest } = prevState;
                    return { ...rest };
                });
            }
            break;

        case "password":
            const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(value);
            if (!passwordRegex) {
                setUserErrors((prevState) => ({
                    ...prevState,
                    password:
                        "La contraseña debe tener al menos 8 caracteres, un número y una letra",
                }));
            } else {
                setUserErrors((prevState) => {
                    const { password, ...rest } = prevState;
                    return { ...rest };
                });
            }
            break;

        case "confirmPassword":
            if (userData.password !== value) {
                setUserErrors((prevState) => ({
                    ...prevState,
                    confirmPassword: "Las contraseñas no coinciden",
                }));
            } else {
                setUserErrors((prevState) => {
                    const { confirmPassword, ...rest } = prevState;
                    return { ...rest };
                });
            }
            break;

        default:
            break;
    }
};

const validateTerms = (setUserErrors, checkbox) => {
    if (!checkbox.current.checked) {
        setUserErrors((prevState) => ({
            ...prevState,
            terms: "Debe aceptar los términos y condiciones",
        }));
    } else {
        setUserErrors((prevState) => {
            const { terms, ...rest } = prevState;
            return { ...rest };
        });
    }
};

export { validateInput, validateTerms };
