import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from "./views/Register/Register";

function App() {
    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route path="/auth/register" element={<Register />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
