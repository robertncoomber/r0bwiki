import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from "./muiHome/Home";
import "./styles.css"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
            </Routes>
        </BrowserRouter >
    );
}

// function Home() {
//     return <h2>Hey</h2>;
// }


