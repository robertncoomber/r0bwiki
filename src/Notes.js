import NoteButton from "./NoteButton"
import { Link } from "react-router-dom"

export default function Notes() {
    return (
        <div className="robTable">
            <table>
                <tr>
                    <th>Notes</th>
                    <th></th>
                </tr>
                <tr>
                    <td > <Link to="/HowToProgramForUnity" className="note">Learning to Code C# for Unity</Link></td>
                    <th></th>
                </tr>

            </table>
        </div>
    )
}