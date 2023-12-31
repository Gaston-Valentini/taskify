import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import Tasks from "./views/Tasks/Tasks";
import CreateTask from "./views/CreateTask/CreateTask";
import Task from "./views/Task/Task";

function App() {
    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route path="/auth/register" element={<Register />} />
                    <Route path="/auth/login" element={<Login />} />
                    <Route path="/tasks" element={<Tasks />} />
                    <Route path="/tasks/create" element={<CreateTask />} />
                    <Route path="/tasks/:id" element={<Task />} />
                    <Route path="*" element={<Navigate to="/auth/login" />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
