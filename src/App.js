import "./styles.css";
import "./Ascii";
import Ascii from "./Ascii";
import HomePage from "./HomePage";

function App() {
    return (
        <div>
            <HomePage />;
            <Ascii />;
            <a href="www.google.com" className="title">
                4th Floor - my audio company
            </a>
            <p className="otherText">
                I Solve audio problems for immersive applications.
            </p>
            ;
        </div>
    );
}

export default App;
