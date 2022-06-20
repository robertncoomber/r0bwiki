import NoteButton from "./NoteButton"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export default function Notes() {

    const navigate = useNavigate();

    return (
        <div className="robTable">
            <table>
                <tr>
                    <th>Notes</th>
                    <th></th>
                </tr>
                <tr>
                    <td className="tableP">
                        <div className="note">02/27/22 - Learning to Code C# for Unity</div>
                        <button className="noteButton" onClick={() => navigate("/HowToProgramForUnity")}>read -></button>
                    </td>
                    <th></th>
                </tr>

            </table>
        </div >
    )
}