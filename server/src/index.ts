import database from "./database/database";
import app from "./app/app";

const startApp = async () => {
    try {
        await database.initialize();
        console.log("Conected to database");
        try {
            app.listen(app.get("SERVER_PORT"), () => {
                console.log(
                    `Server listening on port ${app.get("SERVER_PORT")}`
                );
            });
        } catch (error) {
            console.error(error);
        }
    } catch (error) {
        console.error(error);
    }
};

startApp();
