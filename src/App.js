import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Contact from "./Contact";
import PersonalInformation from "./PersonalInformation";
import "./styles.css"
import Notes from "./Notes";
import NoteEntry from "./NoteEntry";
import Portait from "./Portrait";
import Footer from "./footer";
import "./footerStyle.css"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/HowToProgramForUnity" element={<div><HowToProgramForUnity /><Footer /></div>} />
            </Routes>
        </BrowserRouter >
    );
}

function Home() {
    return <h2><div><PersonalInformation /><Contact /><Notes /><br /><Portait /><Footer /></div></h2>;
}

function HowToProgramForUnity() {
    return <NoteEntry />;
}
