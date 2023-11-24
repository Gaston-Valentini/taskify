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

function App() {
    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route path="/auth/register" element={<Register />} />
                    <Route path="/auth/login" element={<Login />} />
                    <Route path="/tasks" element={<Tasks />} />
                    <Route path="*" element={<Navigate to="/auth/login" />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
